const connectDB = require("../config/db");
const Faculty = require("../models/Faculty");
const faculty = require("../data/faculty");

async function seedFaculty() {
  try {
    await connectDB();

    for (const member of faculty) {
      await Faculty.findOneAndUpdate(
        { facultyId: member.facultyId },
        member,
        {
          upsert: true,
          new: true,
        }
      );
    }

    console.log("----------------------------------");
    console.log("Faculty seed completed successfully!");
    console.log(`${faculty.length} faculty record(s) processed.`);
    console.log("----------------------------------");
  } catch (error) {
    console.error("Faculty seed failed:", error.message);
  } finally {
    await require("mongoose").connection.close();
    console.log("MongoDB connection closed.");
  }
}

seedFaculty();