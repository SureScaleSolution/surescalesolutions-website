import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { CaseStudyDocument } from "@/types/caseStudy";
import { ObjectId } from "mongodb";

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("scalesolutions");
    const collection = db.collection("caseStudies");

    const id = request.nextUrl.searchParams.get("id");
    if (id) {
      const doc = await collection.findOne({ _id: new ObjectId(id) });
      if (!doc) {
        return NextResponse.json(
          { success: false, error: "Not found" },
          { status: 404 }
        );
      }
      const normalized = {
        ...doc,
        _id: doc._id.toString(),
      } as unknown as CaseStudyDocument;
      return NextResponse.json({ success: true, data: normalized });
    }

    const caseStudies = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    const normalized = caseStudies.map((d) => ({
      ...d,
      _id: d._id.toString(),
    }));

    return NextResponse.json({
      success: true,
      data: normalized,
    });
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
