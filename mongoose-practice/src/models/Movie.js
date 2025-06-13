const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
    },
    thumbnail: {
      type: String,
      unique: true,
    },
    story: {
      type: String,
    },
  },
  {
    timestamps: true,

    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

MovieSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "movie",
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
