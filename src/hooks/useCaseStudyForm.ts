import { useState, useCallback } from 'react';
import { CaseStudyFormData } from '@/types/caseStudy';

export interface ImagePreview {
  file: File;
  url: string;
}

export const useCaseStudyForm = () => {
  const [formData, setFormData] = useState<CaseStudyFormData>({
    thumbnailImage: null,
    thumbnailTitle: '',
    serviceType: '',
    caseStudyTitle: '',
    caseStudySubtitle: '',
    clientBackground: '',
    challenges: {
      challengeImage: null,
      challengesList: [{ title: '', description: '' }]
    },
    approach: {
      approachTitle: '',
      approachList: [{ title: '', description: '' }]
    },
    impact: {
      impactTitle: '',
      impactList: [{ title: '', description: '' }]
    },
    result: {
      resultText: '',
      resultImage: null
    },
    testimonial: {
      testimonialTitle: '',
      testimonialText: ''
    }
  });

  const [imagePreviews, setImagePreviews] = useState<{
    thumbnail?: ImagePreview;
    challenge?: ImagePreview;
    result?: ImagePreview;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = useCallback((
    type: 'thumbnail' | 'challenge' | 'result',
    file: File | null
  ) => {
    if (file) {
      // Validate file size
      if (file.size > 5 * 1024 * 1024) {
        alert('Image must be less than 5MB');
        return;
      }

      // Validate file type
      if (!file.type.match(/^image\/(jpeg|jpg|webp|png)$/)) {
        alert('Image must be in webp, jpg, or png format');
        return;
      }

      const url = URL.createObjectURL(file);
      setImagePreviews(prev => ({
        ...prev,
        [type]: { file, url }
      }));

      // Update form data
      if (type === 'thumbnail') {
        setFormData(prev => ({ ...prev, thumbnailImage: file }));
      } else if (type === 'challenge') {
        setFormData(prev => ({
          ...prev,
          challenges: { ...prev.challenges!, challengeImage: file }
        }));
      } else if (type === 'result') {
        setFormData(prev => ({
          ...prev,
          result: { ...prev.result!, resultImage: file }
        }));
      }
    } else {
      // Remove image
      setImagePreviews(prev => {
        const newPreviews = { ...prev };
        if (newPreviews[type]) {
          URL.revokeObjectURL(newPreviews[type]!.url);
          delete newPreviews[type];
        }
        return newPreviews;
      });

      // Update form data
      if (type === 'thumbnail') {
        setFormData(prev => ({ ...prev, thumbnailImage: null }));
      } else if (type === 'challenge') {
        setFormData(prev => ({
          ...prev,
          challenges: { ...prev.challenges!, challengeImage: null }
        }));
      } else if (type === 'result') {
        setFormData(prev => ({
          ...prev,
          result: { ...prev.result!, resultImage: null }
        }));
      }
    }
  }, []);

  const updateFormData = useCallback((updates: Partial<CaseStudyFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  }, []);

  const submitForm = useCallback(async () => {
    // Validate mandatory fields
    if (!formData.thumbnailImage || !formData.thumbnailTitle || !formData.serviceType || !formData.caseStudyTitle || !formData.caseStudySubtitle) {
      alert('Please fill in all mandatory fields: Thumbnail Image, Thumbnail Title, Service Type, Case Study Title, and Case Study Subtitle');
      return false;
    }

    setIsSubmitting(true);

    try {
      const submitFormData = new FormData();
      
      // Add mandatory fields
      submitFormData.append('thumbnailImage', formData.thumbnailImage);
      submitFormData.append('thumbnailTitle', formData.thumbnailTitle);
      submitFormData.append('serviceType', formData.serviceType);
      submitFormData.append('caseStudyTitle', formData.caseStudyTitle);
      submitFormData.append('caseStudySubtitle', formData.caseStudySubtitle);

      // Add optional fields
      if (formData.clientBackground) {
        submitFormData.append('clientBackground', formData.clientBackground);
      }

      // Add challenges
      if (formData.challenges?.challengesList.some(c => c.title || c.description)) {
        submitFormData.append('challengesList', JSON.stringify(formData.challenges.challengesList));
        if (formData.challenges.challengeImage) {
          submitFormData.append('challengeImage', formData.challenges.challengeImage);
        }
      }

      // Add approach
      if (formData.approach?.approachList.some(a => a.title || a.description)) {
        submitFormData.append('approachList', JSON.stringify(formData.approach.approachList));
        if (formData.approach.approachTitle) {
          submitFormData.append('approachTitle', formData.approach.approachTitle);
        }
      }

      // Add impact
      if (formData.impact?.impactList.some(i => i.title || i.description)) {
        submitFormData.append('impactList', JSON.stringify(formData.impact.impactList));
        if (formData.impact.impactTitle) {
          submitFormData.append('impactTitle', formData.impact.impactTitle);
        }
      }

      // Add result
      if (formData.result?.resultText || formData.result?.resultImage) {
        if (formData.result.resultText) {
          submitFormData.append('resultText', formData.result.resultText);
        }
        if (formData.result.resultImage) {
          submitFormData.append('resultImage', formData.result.resultImage);
        }
      }

      // Add testimonial
      if (formData.testimonial?.testimonialTitle || formData.testimonial?.testimonialText) {
        if (formData.testimonial.testimonialTitle) {
          submitFormData.append('testimonialTitle', formData.testimonial.testimonialTitle);
        }
        if (formData.testimonial.testimonialText) {
          submitFormData.append('testimonialText', formData.testimonial.testimonialText);
        }
      }

      const response = await fetch('/api/case-studies', {
        method: 'POST',
        body: submitFormData,
      });

      const result = await response.json();

      if (response.ok) {
        alert('Case study submitted successfully!');
        // Reset form
        setFormData({
          thumbnailImage: null,
          thumbnailTitle: '',
          serviceType: '',
          caseStudyTitle: '',
          caseStudySubtitle: '',
          clientBackground: '',
          challenges: {
            challengeImage: null,
            challengesList: [{ title: '', description: '' }]
          },
          approach: {
            approachTitle: '',
            approachList: [{ title: '', description: '' }]
          },
          impact: {
            impactTitle: '',
            impactList: [{ title: '', description: '' }]
          },
          result: {
            resultText: '',
            resultImage: null
          },
          testimonial: {
            testimonialTitle: '',
            testimonialText: ''
          }
        });
        
        // Clear image previews
        Object.values(imagePreviews).forEach(preview => {
          if (preview) URL.revokeObjectURL(preview.url);
        });
        setImagePreviews({});
        
        return true;
      } else {
        alert(`Error: ${result.error}`);
        return false;
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, imagePreviews]);

  return {
    formData,
    imagePreviews,
    isSubmitting,
    handleImageChange,
    updateFormData,
    submitForm
  };
};