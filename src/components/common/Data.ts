export interface CaseStudyData {
  service: string; // One of the 8 filter services
  thumbnail: {
    image: string;
    title: string; // 1-3 digits or symbols
  };
  caseHeader: {
    title: string; // 3-6 words
    subtitle: string; // longer descriptive subtitle
  };
  clientBackground: string; // description text
  challenges: {
    image: string;
    challengesList: {
      title: string;
      description: string;
    }[];
  };
  approach: {
    title: string;
    approachList: {
      title: string;
      description: string;
    }[];
  };
  impact: {
    title: string;
    impactsList: {
      title: string;
      description: string;
    }[];
  };
  result: {
    description: string; // 10-30 words
    image: string;
  };
  testimonial: {
    clientName: string;
    text: string;
  };
}

export const caseStudiesData: CaseStudyData[] = [
  {
    service: "Amazon FBM & Dropshipping",
    thumbnail: {
      image: "/case-studies/case.png",
      title: "01",
    },
    caseHeader: {
      title: "Amazon FBM Revenue Surge",
      subtitle:
        "Transforming Dropshipping Operations Through Strategic Automation",
    },
    clientBackground:
      "A mid-scale Amazon seller struggling with manual dropshipping operations, facing consistent order delays and inventory management issues that threatened their seller metrics.",
    challenges: {
      image: "/case-studies/challenges-image.png",
      challengesList: [
        {
          title: "Manual Order Processing",
          description:
            "Time-consuming manual processes led to delayed shipments and poor customer satisfaction ratings.",
        },
        {
          title: "Inventory Sync Issues",
          description:
            "Mismatched inventory data resulted in overselling and frequent order cancellations.",
        },
        {
          title: "Supplier Reliability",
          description:
            "Unreliable supplier network causing stockouts and quality control problems.",
        },
      ],
    },

    approach: {
      title: "Strategic Solution Implementation",
      approachList: [
        {
          title: "Process Automation",
          description:
            "Implemented automated order processing systems to eliminate manual bottlenecks and reduce processing time",
        },
        {
          title: "Process Automation",
          description:
            "Implemented automated order processing systems to eliminate manual bottlenecks and reduce processing time",
        },
        {
          title: "Inventory Integration",
          description:
            "Established real-time inventory synchronization with suppliers to prevent overselling and stockouts",
        },
        {
          title: "Supplier Network Optimization",
          description:
            "Vetted and onboarded reliable suppliers with quality control measures and performance monitoring",
        },
      ],
    },

    impact: {
      title: "Measurable Business Growth",
      impactsList: [
        {
          title: "Revenue Growth",
          description:
            "Achieved 250% revenue increase within 6 months through optimized operations",
        },
        {
          title: "Order Processing Speed",
          description:
            "Reduced order processing time from 48 hours to 4 hours with automation",
        },
        {
          title: "Customer Satisfaction",
          description:
            "Improved seller rating from 4.1 to 4.8 stars with faster delivery times",
        },
      ],
    },
    result: {
      description:
        "Achieved complete automation transformation with 250% revenue growth and enhanced customer satisfaction metrics.",
      image: "/case-studies/result-case-image.png",
    },
    testimonial: {
      clientName: "Marcus Johnson",
      text: "The transformation was incredible. Our dropshipping business went from struggling to thriving in just months. The automated systems saved us countless hours while dramatically improving our customer satisfaction.",
    },
  },

  {
    service: "Amazon FBM & Dropshipping",
    thumbnail: {
      image: "/case-studies/case.png",
      title: "02",
    },
    caseHeader: {
      title: "FBM Fulfillment Optimization Success",
      subtitle: "Scaling Operations While Maintaining Quality Standards",
    },
    clientBackground:
      "An established Amazon FBM seller handling 500+ daily orders but facing operational bottlenecks and rising fulfillment costs that were eating into profit margins.",
    challenges: {
      image: "/case-studies/challenges-image.png",
      challengesList: [
        {
          title: "High Fulfillment Costs",
          description:
            "Rising operational expenses were significantly reducing profit margins on each sale.",
        },
        {
          title: "Quality Control Issues",
          description:
            "Inconsistent product quality led to increased returns and negative feedback.",
        },
      ],
    },

    approach: {
      title: "Operational Restructuring Strategy",
      approachList: [
        {
          title: "Cost Optimization",
          description:
            "Analyzed and streamlined fulfillment processes to reduce operational expenses and improve efficiency",
        },
        {
          title: "Quality Assurance Framework",
          description:
            "Implemented comprehensive quality control checkpoints to ensure consistent product standards",
        },
        {
          title: "Logistics Partnership",
          description:
            "Negotiated strategic partnerships with reliable logistics providers for cost-effective shipping solutions",
        },
      ],
    },

    impact: {
      title: "Operational Excellence Achieved",
      impactsList: [
        {
          title: "Cost Reduction",
          description:
            "Reduced fulfillment costs by 35% through optimized logistics and supplier negotiations",
        },
        {
          title: "Quality Improvement",
          description:
            "Decreased return rate from 8% to 2% with enhanced quality control processes",
        },
        {
          title: "Profit Margin Growth",
          description:
            "Increased overall profit margins by 40% while maintaining competitive pricing",
        },
      ],
    },
    result: {
      description:
        "Operational excellence delivered with 35% cost reduction and 40% profit margin improvement through strategic optimization.",
      image: "/case-studies/result-case-image.png",
    },
    testimonial: {
      clientName: "Sarah Chen",
      text: "Working with this team revolutionized our FBM operations. We're now processing more orders than ever while our costs have dropped significantly. It's exactly what our business needed to scale properly.",
    },
  },
  {
    service: "Account Reinstatement",
    thumbnail: {
      image: "/case-studies/case.png",
      title: "519%",
    },
    caseHeader: {
      title: "Amazon Account Recovery Victory",
      subtitle: "Restoring Suspended Account and Rebuilding Seller Trust",
    },
    clientBackground:
      "A successful Amazon seller with $2M annual revenue whose account was suspended due to policy violations, threatening their entire business operation and income stream.",
    challenges: {
      image: "/case-studies/challenges-image.png",
      challengesList: [
        {
          title: "Account Suspension",
          description:
            "Complete loss of selling privileges resulted in zero revenue and mounting inventory costs.",
        },
        {
          title: "Policy Violations",
          description:
            "Multiple policy infractions required comprehensive documentation and remediation plans.",
        },
        {
          title: "Revenue Loss",
          description:
            "Daily revenue loss of $5,000+ while account remained suspended during appeals process.",
        },
      ],
    },

    approach: {
      title: "Account Recovery and Compliance Strategy",
      approachList: [
        {
          title: "Policy Remediation Plan",
          description:
            "Developed comprehensive documentation addressing all policy violations with corrective action plans",
        },
        {
          title: "Appeal Process Management",
          description:
            "Crafted strategic appeals with supporting evidence and clear compliance commitments to Amazon",
        },
        {
          title: "Compliance System Implementation",
          description:
            "Established ongoing monitoring systems to ensure future policy adherence and prevent violations",
        },
      ],
    },

    impact: {
      title: "Complete Business Recovery",
      impactsList: [
        {
          title: "Account Restoration",
          description:
            "Successfully reinstated account within 45 days with full selling privileges restored",
        },
        {
          title: "Revenue Recovery",
          description:
            "Returned to 120% of previous revenue levels within 3 months post-reinstatement",
        },
        {
          title: "Compliance Systems",
          description:
            "Implemented robust compliance monitoring to prevent future policy violations",
        },
      ],
    },
    result: {
      description:
        "Complete account recovery achieved within 45 days, returning to 120% of previous revenue levels.",
      image: "/case-studies/result-case-image.png",
    },
    testimonial: {
      clientName: "David Rodriguez",
      text: "I thought my Amazon business was finished when my account got suspended. This team not only got my account back but helped me build better systems to ensure it never happens again. They saved my business.",
    },
  },
  {
    service: "Walmart Market Place",
    thumbnail: {
      image: "/case-studies/case.png",
      title: "#1",
    },
    caseHeader: {
      title: "Walmart Marketplace Breakthrough",
      subtitle:
        "Overcoming Fulfillment Discrepancies and Restoring Seller Trust",
    },
    clientBackground:
      "An experienced Walmart seller managing daily orders through a virtual assistant (VA). The business relied heavily on third-party support for fulfillment operations.",
    challenges: {
      image: "/case-studies/challenges-image.png",
      challengesList: [
        {
          title: "Fulfillment Errors",
          description:
            "Frequent shipping delays and incorrect order fulfillment damaged seller performance metrics.",
        },
        {
          title: "VA Communication Gap",
          description:
            "Poor communication between virtual assistants and fulfillment centers caused operational inefficiencies.",
        },
        {
          title: "Performance Metrics Decline",
          description:
            "Declining on-time delivery rates threatened seller account standing on Walmart platform.",
        },
      ],
    },

    approach: {
      title: "Performance Recovery and Process Optimization",
      approachList: [
        {
          title: "Communication Bridge",
          description:
            "Established clear communication protocols between virtual assistants and fulfillment centers",
        },
        {
          title: "Quality Control Implementation",
          description:
            "Introduced systematic order verification processes to eliminate fulfillment errors and delays",
        },
        {
          title: "Performance Monitoring System",
          description:
            "Deployed real-time tracking systems to monitor delivery performance and proactively address issues",
        },
      ],
    },

    impact: {
      title: "Performance Excellence Restored",
      impactsList: [
        {
          title: "Delivery Performance",
          description:
            "Improved on-time delivery rate from 78% to 96% through streamlined operations",
        },
        {
          title: "Order Accuracy",
          description:
            "Achieved 99.2% order accuracy rate with enhanced quality control measures",
        },
        {
          title: "Revenue Growth",
          description:
            "Generated 180% revenue increase through improved seller performance metrics",
        },
      ],
    },
    result: {
      description:
        "Performance excellence restored with 96% on-time delivery and 180% revenue growth through systematic improvements.",
      image: "/case-studies/result-case-image.png",
    },
    testimonial: {
      clientName: "Jennifer Walsh",
      text: "The systematic approach to fixing our fulfillment issues was remarkable. Our Walmart performance went from concerning to exceptional, and our revenue followed suit. Professional service that delivers real results.",
    },
  },
  {
    service: "TikTok Shop Growth",
    thumbnail: {
      image: "/case-studies/case.png",
      title: "10%",
    },
    caseHeader: {
      title: "TikTok Viral Success Story",
      subtitle:
        "Transforming Social Commerce Through Strategic Content Marketing",
    },
    clientBackground:
      "A fashion brand looking to expand into social commerce through TikTok Shop, seeking to leverage viral content for explosive sales growth.",
    challenges: {
      image: "/case-studies/challenges-image.png",
      challengesList: [
        {
          title: "Content Creation Struggles",
          description:
            "Difficulty creating engaging content that resonates with TikTok's unique audience and algorithm.",
        },
        {
          title: "Low Conversion Rates",
          description:
            "High video views but poor conversion from viewers to actual customers and sales.",
        },
        {
          title: "Inventory Management",
          description:
            "Unpredictable viral content made inventory planning and stock management extremely challenging.",
        },
      ],
    },

    approach: {
      title: "Viral Content and Commerce Strategy",
      approachList: [
        {
          title: "Content Strategy Development",
          description:
            "Developed data-driven content creation framework tailored to TikTok's algorithm and audience preferences",
        },
        {
          title: "Conversion Funnel Optimization",
          description:
            "Implemented strategic sales funnels and call-to-actions to convert viral views into actual purchases",
        },
        {
          title: "Dynamic Inventory Planning",
          description:
            "Created flexible inventory management system capable of rapid scaling during viral content spikes",
        },
      ],
    },

    impact: {
      title: "Viral Growth Achievement",
      impactsList: [
        {
          title: "Viral Content Success",
          description:
            "Created 5 viral videos with over 1M views each, driving massive brand awareness",
        },
        {
          title: "Conversion Rate Boost",
          description:
            "Improved conversion rate from 0.8% to 4.2% through optimized sales funnels",
        },
        {
          title: "Revenue Explosion",
          description:
            "Generated 500% revenue growth within 4 months through viral marketing strategies",
        },
      ],
    },
    result: {
      description:
        "Viral success achieved with 5 million-view videos and 500% revenue growth through strategic content marketing.",
      image: "/case-studies/result-case-image.png",
    },
    testimonial: {
      clientName: "Alex Thompson",
      text: "Going viral on TikTok changed everything for our brand. The strategic approach to content creation and conversion optimization turned our TikTok Shop into our biggest revenue channel. Incredible results.",
    },
  },
  {
    service: "eBay Store Optimization",
    thumbnail: {
      image: "/case-studies/case.png",
      title: "95%",
    },
    caseHeader: {
      title: "eBay Listing Optimization Success",
      subtitle: "Maximizing Visibility Through Strategic SEO and Pricing",
    },
    clientBackground:
      "An eBay seller with over 1000 listings struggling with poor visibility and declining sales due to outdated optimization strategies.",
    challenges: {
      image: "/case-studies/challenges-image.png",
      challengesList: [
        {
          title: "Poor Search Visibility",
          description:
            "Products ranking low in eBay search results due to inadequate keyword optimization and SEO strategies.",
        },
        {
          title: "Pricing Competition",
          description:
            "Losing sales to competitors with similar products at lower prices or better positioning.",
        },
        {
          title: "Listing Quality Issues",
          description:
            "Low-quality images and descriptions resulting in reduced buyer confidence and conversion rates.",
        },
        {
          title: "Category Misalignment",
          description:
            "Products listed in wrong categories reducing discoverability and search ranking performance.",
        },
      ],
    },

    approach: {
      title: "Comprehensive eBay Optimization Strategy",
      approachList: [
        {
          title: "SEO Optimization",
          description:
            "Implemented advanced keyword research and optimization techniques to improve search rankings and visibility",
        },
        {
          title: "Competitive Pricing Strategy",
          description:
            "Developed dynamic pricing models based on market analysis to maintain competitive edge while preserving margins",
        },
        {
          title: "Listing Enhancement",
          description:
            "Upgraded product images, descriptions, and formatting to professional standards for better conversion rates",
        },
        {
          title: "Category Optimization",
          description:
            "Analyzed and repositioned products in optimal categories for maximum exposure and relevancy",
        },
        {
          title: "Performance Monitoring",
          description:
            "Established tracking systems to monitor listing performance and make data-driven optimization decisions",
        },
      ],
    },

    impact: {
      title: "Dramatic Performance Improvement",
      impactsList: [
        {
          title: "Search Visibility Boost",
          description:
            "Improved average search ranking from page 3 to page 1 for target keywords, increasing organic traffic by 300%",
        },
        {
          title: "Conversion Rate Growth",
          description:
            "Enhanced listing quality resulted in 85% increase in conversion rates and buyer engagement metrics",
        },
        {
          title: "Revenue Surge",
          description:
            "Generated 240% revenue increase within 4 months through improved visibility and conversion optimization",
        },
        {
          title: "Competitive Positioning",
          description:
            "Achieved top 3 positioning for 70% of target products, significantly outperforming competitor listings",
        },
      ],
    },
    result: {
      description:
        "eBay optimization delivered 240% revenue growth with enhanced search visibility and conversion rates.",
      image: "/case-studies/result-case-image.png",
    },
    testimonial: {
      clientName: "Michael Peterson",
      text: "The eBay optimization transformed our entire business. Our listings went from invisible to top-performing, and our sales numbers speak for themselves. Best investment we ever made.",
    },
  },
  {
    service: "Shopify Store Services",
    thumbnail: {
      image: "/case-studies/case.png",
      title: "8x",
    },
    caseHeader: {
      title: "Shopify Store Conversion Mastery",
      subtitle: "Transforming Traffic Into Revenue Through UX Optimization",
    },
    clientBackground:
      "A Shopify store owner with high traffic but extremely low conversion rates, struggling to turn visitors into paying customers.",
    challenges: {
      image: "/case-studies/challenges-image.png",
      challengesList: [
        {
          title: "Low Conversion Rates",
          description:
            "Despite high traffic volumes, conversion rates remained under 1%, indicating major user experience issues.",
        },
        {
          title: "Cart Abandonment",
          description:
            "Over 80% cart abandonment rate due to complicated checkout process and trust barriers.",
        },
      ],
    },

    approach: {
      title: "Conversion-Focused Redesign Strategy",
      approachList: [
        {
          title: "UX/UI Optimization",
          description:
            "Redesigned store layout, navigation, and user flow to create seamless shopping experience",
        },
        {
          title: "Checkout Streamlining",
          description:
            "Simplified checkout process to single-page format with guest checkout options and multiple payment methods",
        },
        {
          title: "Trust Building Elements",
          description:
            "Added security badges, customer reviews, and guarantee information to build buyer confidence",
        },
      ],
    },

    impact: {
      title: "Conversion Revolution",
      impactsList: [
        {
          title: "Conversion Rate Explosion",
          description:
            "Increased conversion rate from 0.8% to 6.4%, delivering an 8x improvement in sales performance",
        },
        {
          title: "Cart Recovery Success",
          description:
            "Reduced cart abandonment from 80% to 35% through streamlined checkout and trust optimization",
        },
      ],
    },
    result: {
      description:
        "Shopify conversion optimization delivered 8x conversion rate improvement and dramatic cart abandonment reduction.",
      image: "/case-studies/result-case-image.png",
    },
    testimonial: {
      clientName: "Emma Rodriguez",
      text: "Incredible results! Our conversion rate went from embarrassing to industry-leading. The store redesign completely transformed our business model and profitability.",
    },
  },
  {
    service: "Amazon FBA Wholesale",
    thumbnail: {
      image: "/case-studies/case.png",
      title: "$2M",
    },
    caseHeader: {
      title: "Amazon FBA Wholesale Scaling Success",
      subtitle: "Building Million-Dollar Revenue Through Strategic Sourcing",
    },
    clientBackground:
      "A small-scale Amazon seller looking to transition from retail arbitrage to wholesale FBA operations for sustainable growth.",
    challenges: {
      image: "/case-studies/challenges-image.png",
      challengesList: [
        {
          title: "Supplier Sourcing",
          description:
            "Difficulty finding reliable wholesale suppliers with profitable margins and consistent inventory availability.",
        },
        {
          title: "Capital Management",
          description:
            "Limited working capital for large wholesale purchases while maintaining adequate cash flow for operations.",
        },
        {
          title: "Brand Approval Barriers",
          description:
            "Challenges getting approved to sell popular wholesale brands on Amazon's restricted product categories.",
        },
        {
          title: "Competition Analysis",
          description:
            "Inability to effectively analyze market competition and identify profitable wholesale opportunities.",
        },
        {
          title: "Inventory Planning",
          description:
            "Poor forecasting resulting in stockouts during peak seasons and overstock of slow-moving products.",
        },
        {
          title: "Logistics Optimization",
          description:
            "Inefficient shipping and storage strategies leading to high FBA fees and reduced profit margins.",
        },
      ],
    },

    approach: {
      title: "Strategic FBA Wholesale Development",
      approachList: [
        {
          title: "Supplier Network Development",
          description:
            "Built relationships with verified wholesale suppliers and negotiated favorable terms for consistent product sourcing",
        },
        {
          title: "Financial Planning System",
          description:
            "Implemented cash flow management and inventory financing strategies to support large wholesale purchases",
        },
        {
          title: "Brand Authorization Process",
          description:
            "Developed systematic approach for obtaining brand approvals and building authorized dealer relationships",
        },
        {
          title: "Market Intelligence Platform",
          description:
            "Created comprehensive competitor analysis and product research system for identifying profitable opportunities",
        },
      ],
    },

    impact: {
      title: "Wholesale Business Transformation",
      impactsList: [
        {
          title: "Revenue Milestone Achievement",
          description:
            "Scaled from $50K to $2M annual revenue within 18 months through strategic wholesale partnerships",
        },
        {
          title: "Profit Margin Optimization",
          description:
            "Improved overall profit margins from 15% to 35% by transitioning from retail arbitrage to wholesale model",
        },
        {
          title: "Inventory Efficiency",
          description:
            "Reduced inventory holding costs by 40% through improved forecasting and supplier relationship management",
        },
      ],
    },
    result: {
      description:
        "FBA wholesale transformation achieved $2M revenue milestone with 35% profit margins and optimized operations.",
      image: "/case-studies/result-case-image.png",
    },
    testimonial: {
      clientName: "Robert Chen",
      text: "The wholesale transition completely changed our Amazon business. Going from retail arbitrage to $2M in wholesale revenue seemed impossible, but their systematic approach made it happen.",
    },
  },
  {
    service: "Amazon PL & MPL",
    thumbnail: {
      image: "/case-studies/case.png",
      title: "#1 BSR",
    },
    caseHeader: {
      title: "Private Label Bestseller Achievement",
      subtitle: "Dominating Competitive Categories Through Strategic Branding",
    },
    clientBackground:
      "An entrepreneur entering Amazon's private label market with no prior experience, seeking to build a sustainable brand in competitive categories.",
    challenges: {
      image: "/case-studies/challenges-image.png",
      challengesList: [
        {
          title: "Product Research Complexity",
          description:
            "Difficulty identifying profitable product opportunities in saturated markets with high competition levels.",
        },
        {
          title: "Supplier Quality Control",
          description:
            "Challenges finding reliable manufacturers and ensuring consistent product quality and specifications.",
        },
        {
          title: "Brand Development",
          description:
            "Lack of branding expertise and design resources to create compelling product packaging and listings.",
        },
      ],
    },

    approach: {
      title: "Comprehensive Private Label Strategy",
      approachList: [
        {
          title: "Advanced Product Research",
          description:
            "Utilized sophisticated market analysis tools and techniques to identify high-opportunity, low-competition products",
        },
        {
          title: "Supplier Vetting Process",
          description:
            "Established rigorous supplier evaluation and quality control protocols to ensure premium product standards",
        },
      ],
    },

    impact: {
      title: "Private Label Dominance",
      impactsList: [
        {
          title: "Bestseller Achievement",
          description:
            "Reached #1 Best Seller Rank in target category within 6 months of launch, outperforming 10,000+ competitors",
        },
        {
          title: "Revenue Generation",
          description:
            "Generated $150K monthly revenue within first year through strategic product positioning and optimization",
        },
        {
          title: "Brand Recognition",
          description:
            "Built recognizable brand identity with 4.8-star average rating and over 5,000 positive customer reviews",
        },
        {
          title: "Market Share Growth",
          description:
            "Captured 15% market share in competitive category through superior product quality and customer experience",
        },
        {
          title: "Expansion Success",
          description:
            "Successfully launched 8 additional products under brand umbrella with consistent bestseller performance",
        },
      ],
    },
    result: {
      description:
        "Private label success achieved #1 BSR ranking and $150K monthly revenue with strong brand recognition.",
      image: "/case-studies/result-case-image.png",
    },
    testimonial: {
      clientName: "Jessica Martinez",
      text: "From zero to #1 bestseller in 6 months - it still feels surreal! The private label strategy and execution were flawless. Our brand is now a recognized leader in our category.",
    },
  },
  {
    service: "TikTok Shop Growth",
    thumbnail: {
      image: "/case-studies/case.png",
      title: "500K",
    },
    caseHeader: {
      title: "TikTok Influencer Partnership Success",
      subtitle: "Scaling Brand Awareness Through Strategic Creator Collaborations",
    },
    clientBackground:
      "A beauty brand seeking to expand reach and credibility through TikTok influencer partnerships and authentic content creation.",
    challenges: {
      image: "/case-studies/challenges-image.png",
      challengesList: [
        {
          title: "Influencer Vetting Process",
          description:
            "Difficulty identifying authentic influencers with engaged audiences that align with brand values and target demographics.",
        },
        {
          title: "Content Quality Control",
          description:
            "Ensuring consistent brand messaging while allowing creative freedom for authentic influencer content creation.",
        },
        {
          title: "ROI Measurement",
          description:
            "Challenges tracking campaign effectiveness and measuring return on investment from influencer partnerships.",
        },
        {
          title: "Audience Alignment",
          description:
            "Finding influencers whose audience demographics perfectly match target customer profile and purchasing behavior.",
        },
        {
          title: "Partnership Negotiations",
          description:
            "Structuring fair compensation models that motivate influencers while maintaining profitable campaign budgets.",
        },
      ],
    },

    approach: {
      title: "Strategic Influencer Partnership Framework",
      approachList: [
        {
          title: "Influencer Audit System",
          description:
            "Developed comprehensive vetting process to identify authentic influencers with genuine engagement and brand alignment",
        },
        {
          title: "Creative Brief Development",
          description:
            "Created detailed content guidelines that maintain brand consistency while encouraging authentic creative expression",
        },
        {
          title: "Performance Tracking Platform",
          description:
            "Implemented advanced analytics system to monitor campaign performance and calculate precise ROI metrics",
        },
      ],
    },

    impact: {
      title: "Influencer Marketing Excellence",
      impactsList: [
        {
          title: "Follower Growth Explosion",
          description:
            "Generated 500K new followers across TikTok platform through strategic influencer partnerships and viral content",
        },
        {
          title: "Brand Awareness Surge",
          description:
            "Achieved 800% increase in brand mention volume and 400% growth in organic user-generated content",
        },
        {
          title: "Sales Conversion Success",
          description:
            "Delivered 320% revenue increase through influencer-driven traffic with 6.2% average conversion rate",
        },
        {
          title: "Partnership Network Growth",
          description:
            "Built sustainable network of 50+ verified micro and macro influencers for ongoing collaboration opportunities",
        },
      ],
    },
    result: {
      description:
        "TikTok influencer strategy delivered 500K new followers and 320% revenue growth through strategic partnerships.",
      image: "/case-studies/result-case-image.png",
    },
    testimonial: {
      clientName: "Sophia Williams",
      text: "The influencer partnership program exceeded all expectations. We went from unknown to trending, and our sales reflect the incredible reach and authenticity these partnerships created.",
    },
  },
  {
    service: "Shopify Store Services",
    thumbnail: {
      image: "/case-studies/case.png",
      title: "44%",
    },
    caseHeader: {
      title: "Shopify Subscription Model Success",
      subtitle: "Building Recurring Revenue Through Strategic Retention",
    },
    clientBackground:
      "A Shopify store owner transitioning from one-time purchases to subscription-based business model for predictable revenue growth.",
    challenges: {
      image: "/case-studies/challenges-image.png",
      challengesList: [
        {
          title: "Customer Retention Issues",
          description:
            "High churn rate in subscription model with customers canceling after first or second delivery cycle.",
        },
      ],
    },

    approach: {
      title: "Subscription Optimization Strategy",
      approachList: [
        {
          title: "Retention Program Development",
          description:
            "Created comprehensive customer retention strategy with personalized communication and value-added services",
        },
        {
          title: "Pricing Model Optimization",
          description:
            "Developed flexible pricing tiers and subscription options to accommodate different customer preferences and budgets",
        },
        {
          title: "Customer Experience Enhancement",
          description:
            "Implemented seamless subscription management portal with easy customization and pause/resume functionality",
        },
        {
          title: "Personalization Engine",
          description:
            "Built AI-driven product recommendation system to deliver personalized subscription boxes based on customer preferences",
        },
        {
          title: "Loyalty Integration",
          description:
            "Integrated loyalty program with subscription benefits to increase customer lifetime value and reduce churn",
        },
        {
          title: "Analytics Dashboard",
          description:
            "Deployed comprehensive subscription analytics to track customer behavior and optimize retention strategies",
        },
      ],
    },

    impact: {
      title: "Subscription Business Transformation",
      impactsList: [
        {
          title: "Churn Reduction Success",
          description:
            "Reduced monthly churn rate from 25% to 8% through improved customer experience and retention strategies",
        },
        {
          title: "Revenue Predictability",
          description:
            "Achieved 44% of total revenue from subscription model, creating stable monthly recurring revenue stream",
        },
        {
          title: "Customer Lifetime Value Growth",
          description:
            "Increased average customer lifetime value by 280% through enhanced retention and upselling strategies",
        },
      ],
    },
    result: {
      description:
        "Subscription model transformation delivered 44% recurring revenue with significantly reduced churn and enhanced customer lifetime value.",
      image: "/case-studies/result-case-image.png",
    },
    testimonial: {
      clientName: "Daniel Park",
      text: "The subscription model completely changed our business dynamics. Predictable revenue, happy customers, and sustainable growth - exactly what we needed for long-term success.",
    },
  },
  {
    service: "Account Reinstatement",
    thumbnail: {
      image: "/case-studies/case.png",
      title: "30 Days",
    },
    caseHeader: {
      title: "Multiple Platform Recovery Success",
      subtitle: "Simultaneous Account Reinstatement Across All Major Platforms",
    },
    clientBackground:
      "A multi-platform seller who faced simultaneous account suspensions across Amazon, eBay, and Walmart due to linked account issues.",
    challenges: {
      image: "/case-studies/challenges-image.png",
      challengesList: [
        {
          title: "Multi-Platform Suspensions",
          description:
            "Simultaneous account suspensions across Amazon, eBay, and Walmart created complete revenue shutdown.",
        },
        {
          title: "Linked Account Issues",
          description:
            "Platform algorithms flagged accounts as related due to shared business information and IP addresses.",
        },
        {
          title: "Complex Policy Violations",
          description:
            "Multiple policy violations across different platforms required specialized expertise for each marketplace.",
        },
        {
          title: "Time-Sensitive Recovery",
          description:
            "Business survival depended on quick resolution as operational costs continued without any income generation.",
        },
        {
          title: "Documentation Requirements",
          description:
            "Each platform required different types of evidence and documentation to support reinstatement appeals.",
        },
        {
          title: "Legal Compliance Issues",
          description:
            "Some violations involved legal compliance requirements that needed professional resolution and documentation.",
        },
        {
          title: "Reputation Management",
          description:
            "Negative seller feedback and ratings during suspension period required strategic reputation recovery planning.",
        },
      ],
    },

    approach: {
      title: "Comprehensive Multi-Platform Recovery Strategy",
      approachList: [
        {
          title: "Platform-Specific Appeal Strategy",
          description:
            "Developed customized appeal strategies for each platform addressing their specific policy requirements and procedures",
        },
        {
          title: "Legal Compliance Resolution",
          description:
            "Worked with legal experts to resolve compliance issues and obtain necessary certifications for reinstatement",
        },
        {
          title: "Account Separation Protocol",
          description:
            "Implemented proper account separation procedures to prevent future linking issues across platforms",
        },
        {
          title: "Documentation Package Creation",
          description:
            "Compiled comprehensive evidence packages with supporting documents tailored to each platform's requirements",
        },
      ],
    },

    impact: {
      title: "Complete Business Recovery Achievement",
      impactsList: [
        {
          title: "Rapid Reinstatement Success",
          description:
            "Successfully reinstated all three platform accounts within 30 days, restoring complete business operations",
        },
        {
          title: "Revenue Recovery Excellence",
          description:
            "Achieved 150% of pre-suspension revenue levels within 2 months through optimized listings and strategies",
        },
        {
          title: "Compliance System Implementation",
          description:
            "Established comprehensive compliance monitoring across all platforms to prevent future policy violations",
        },
        {
          title: "Account Security Enhancement",
          description:
            "Implemented advanced account security measures and separation protocols to prevent future linking issues",
        },
        {
          title: "Reputation Restoration",
          description:
            "Successfully restored seller ratings and feedback scores to pre-suspension levels across all platforms",
        },
      ],
    },
    result: {
      description:
        "Multi-platform account recovery achieved within 30 days with 150% revenue recovery and enhanced compliance systems.",
      image: "/case-studies/result-case-image.png",
    },
    testimonial: {
      clientName: "Thomas Anderson",
      text: "When all three accounts got suspended simultaneously, I thought my business was over. The team's expertise in multi-platform recovery saved my livelihood and made my business stronger than before.",
    },
  },
  {
    service: "Walmart Market Place",
    thumbnail: {
      image: "/case-studies/case.png",
      title: "72%",
    },
    caseHeader: {
      title: "Walmart Advertising ROI Optimization",
      subtitle: "Maximizing Ad Spend Efficiency Through Data-Driven Campaigns",
    },
    clientBackground:
      "A Walmart marketplace seller struggling with poor advertising performance and negative ROI on sponsored product campaigns.",
    challenges: {
      image: "/case-studies/challenges-image.png",
      challengesList: [
        {
          title: "Negative Advertising ROI",
          description:
            "Sponsored campaigns generating less revenue than ad spend, resulting in overall losses on advertising investment.",
        },
        {
          title: "Poor Keyword Performance",
          description:
            "Inability to identify and target high-converting keywords while avoiding expensive, low-performance terms.",
        },
        {
          title: "Budget Misallocation",
          description:
            "Inefficient budget distribution across campaigns leading to overspending on underperforming products.",
        },
      ],
    },

    approach: {
      title: "Data-Driven Advertising Optimization",
      approachList: [
        {
          title: "Keyword Research & Analysis",
          description:
            "Conducted comprehensive keyword research to identify high-converting, cost-effective search terms for optimization",
        },
        {
          title: "Campaign Structure Redesign",
          description:
            "Restructured campaign architecture with proper segmentation and budget allocation for maximum efficiency",
        },
        {
          title: "Bid Management System",
          description:
            "Implemented automated bid management strategies based on performance data and conversion metrics",
        },
        {
          title: "Negative Keyword Strategy",
          description:
            "Developed comprehensive negative keyword lists to eliminate wasteful spending on irrelevant search terms",
        },
      ],
    },

    impact: {
      title: "Advertising Performance Revolution",
      impactsList: [
        {
          title: "ROI Transformation",
          description:
            "Converted negative ROI campaigns to 72% positive ROI through strategic optimization and targeting improvements",
        },
        {
          title: "Cost Efficiency Gains",
          description:
            "Reduced average cost-per-click by 45% while maintaining high-quality traffic and conversion rates",
        },
        {
          title: "Revenue Growth Achievement",
          description:
            "Generated 180% increase in advertising-driven revenue while reducing overall advertising spend by 25%",
        },
      ],
    },
    result: {
      description:
        "Walmart advertising optimization delivered 72% positive ROI with reduced costs and 180% revenue growth.",
      image: "/case-studies/result-case-image.png",
    },
    testimonial: {
      clientName: "Lisa Thompson",
      text: "The advertising transformation was incredible. Going from losing money on ads to 72% ROI completely changed our profitability. Now advertising is our biggest growth driver.",
    },
  },
  {
    service: "eBay Store Optimization",
    thumbnail: {
      image: "/case-studies/case.png",
      title: "4.9★",
    },
    caseHeader: {
      title: "eBay Customer Service Excellence",
      subtitle: "Building Seller Reputation Through Superior Customer Experience",
    },
    clientBackground:
      "An eBay seller with declining feedback scores and increasing disputes, struggling to maintain Top Rated Seller status.",
    challenges: {
      image: "/case-studies/challenges-image.png",
      challengesList: [
        {
          title: "Declining Feedback Scores",
          description:
            "Negative feedback accumulation threatening seller standing and search visibility on eBay platform.",
        },
        {
          title: "High Dispute Resolution Rate",
          description:
            "Increasing number of customer disputes and returns affecting seller performance metrics significantly.",
        },
        {
          title: "Communication Gaps",
          description:
            "Poor customer communication leading to misunderstandings and escalated issues with buyers.",
        },
        {
          title: "Response Time Issues",
          description:
            "Slow response times to customer inquiries causing frustration and negative feedback accumulation.",
        },
        {
          title: "Product Description Mismatches",
          description:
            "Inaccurate product descriptions leading to customer disappointment and return requests.",
        },
      ],
    },

    approach: {
      title: "Customer Experience Transformation Strategy",
      approachList: [
        {
          title: "Customer Service Protocol",
          description:
            "Developed comprehensive customer service guidelines with response time standards and communication templates",
        },
        {
          title: "Proactive Communication System",
          description:
            "Implemented automated messaging system for order updates, shipping notifications, and follow-up communications",
        },
        {
          title: "Quality Assurance Program",
          description:
            "Established product verification and description accuracy protocols to prevent customer dissatisfaction",
        },
        {
          title: "Dispute Prevention Strategy",
          description:
            "Created proactive issue resolution process to address potential problems before they escalate to disputes",
        },
        {
          title: "Feedback Management System",
          description:
            "Implemented systematic approach for encouraging positive feedback and professionally addressing negative reviews",
        },
        {
          title: "Customer Satisfaction Monitoring",
          description:
            "Deployed customer satisfaction tracking system with regular surveys and feedback collection mechanisms",
        },
        {
          title: "Return Policy Optimization",
          description:
            "Streamlined return process and policies to reduce friction and improve customer satisfaction ratings",
        },
      ],
    },

    impact: {
      title: "Customer Service Excellence Achievement",
      impactsList: [
        {
          title: "Feedback Score Improvement",
          description:
            "Improved overall feedback score from 4.2 to 4.9 stars, achieving Top Rated Seller status and enhanced visibility",
        },
        {
          title: "Dispute Resolution Success",
          description:
            "Reduced dispute rate by 85% through proactive communication and improved customer service protocols",
        },
        {
          title: "Customer Retention Growth",
          description:
            "Achieved 65% repeat customer rate through exceptional service experience and relationship building",
        },
        {
          title: "Response Time Excellence",
          description:
            "Achieved average response time of 2 hours for customer inquiries, significantly exceeding eBay standards",
        },
      ],
    },
    result: {
      description:
        "Customer service excellence delivered 4.9-star rating with 85% dispute reduction and Top Rated Seller status.",
      image: "/case-studies/result-case-image.png",
    },
    testimonial: {
      clientName: "Mark Johnson",
      text: "The customer service transformation was remarkable. Our feedback went from concerning to exceptional, and customers now specifically mention our service quality. It's completely changed our eBay business.",
    },
  },
  {
    service: "Amazon PL & MPL",
    thumbnail: {
      image: "/case-studies/case.png",
      title: "12x",
    },
    caseHeader: {
      title: "Multi-Product Launch Success",
      subtitle: "Scaling Brand Portfolio Through Strategic Product Expansion",
    },
    clientBackground:
      "A successful private label seller with one bestselling product looking to expand their brand portfolio and diversify revenue streams.",
    challenges: {
      image: "/case-studies/challenges-image.png",
      challengesList: [
        {
          title: "Product Portfolio Expansion",
          description:
            "Challenges identifying complementary products that align with existing brand identity and customer base.",
        },
        {
          title: "Cross-Product Synergy",
          description:
            "Difficulty creating marketing synergies between products to maximize customer lifetime value.",
        },
        {
          title: "Inventory Management Complexity",
          description:
            "Managing multiple product lines with different demand patterns and inventory turnover rates.",
        },
        {
          title: "Brand Consistency Maintenance",
          description:
            "Ensuring consistent brand messaging and quality standards across expanding product portfolio.",
        },
        {
          title: "Resource Allocation",
          description:
            "Optimizing marketing budget and operational resources across multiple product launches and campaigns.",
        },
        {
          title: "Market Cannibalization Risk",
          description:
            "Preventing new products from competing with existing successful products in the same market space.",
        },
        {
          title: "Launch Timing Coordination",
          description:
            "Strategically timing multiple product launches to maximize market impact while managing operational capacity.",
        },
        {
          title: "Competitive Differentiation",
          description:
            "Creating unique selling propositions for each product while maintaining cohesive brand positioning.",
        },
      ],
    },

    approach: {
      title: "Strategic Brand Portfolio Expansion",
      approachList: [
        {
          title: "Product Research & Selection",
          description:
            "Conducted comprehensive market analysis to identify high-opportunity products complementary to existing brand",
        },
        {
          title: "Brand Architecture Development",
          description:
            "Created cohesive brand architecture ensuring consistency across product lines while allowing individual differentiation",
        },
        {
          title: "Sequential Launch Strategy",
          description:
            "Developed strategic launch timeline to maximize market impact while managing operational complexity",
        },
        {
          title: "Cross-Product Marketing",
          description:
            "Implemented integrated marketing campaigns leveraging existing customer base for new product adoption",
        },
        {
          title: "Inventory Optimization System",
          description:
            "Established advanced inventory management system to handle multiple products with varying demand patterns",
        },
      ],
    },

    impact: {
      title: "Brand Portfolio Transformation",
      impactsList: [
        {
          title: "Revenue Multiplication",
          description:
            "Achieved 12x revenue growth through successful launch of 15 complementary products within brand portfolio",
        },
        {
          title: "Market Dominance Achievement",
          description:
            "Secured top 3 positions in 5 different product categories, establishing comprehensive market presence",
        },
        {
          title: "Customer Lifetime Value Increase",
          description:
            "Improved average customer lifetime value by 450% through cross-product purchasing and brand loyalty",
        },
        {
          title: "Operational Efficiency Gains",
          description:
            "Achieved economies of scale reducing per-unit operational costs by 35% across entire product portfolio",
        },
        {
          title: "Brand Recognition Success",
          description:
            "Established recognizable brand identity with consistent 4.7+ star ratings across all product lines",
        },
        {
          title: "Market Share Expansion",
          description:
            "Captured significant market share across multiple categories, becoming recognized category leader",
        },
      ],
    },
    result: {
      description:
        "Brand portfolio expansion delivered 12x revenue growth with 15 successful product launches and market dominance.",
      image: "/case-studies/result-case-image.png",
    },
    testimonial: {
      clientName: "Rachel Kim",
      text: "Going from one product to a full brand portfolio seemed impossible, but the strategic approach made it seamless. 12x growth with consistent quality across all products - it's been an incredible transformation.",
    },
  },
];

export default caseStudiesData;
