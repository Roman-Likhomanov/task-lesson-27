import mongoose from "mongoose";

const Calendar = new mongoose.Schema(definition, {
  data: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
});

// export default mongoose.model(name, 'Calendar', Calendar)
