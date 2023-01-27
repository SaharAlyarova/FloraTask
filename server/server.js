const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 8080;
const app = express();
app.use(cors());
app.use(bodyParser.json());
const { Schema } = mongoose;
const tableSchema = new Schema(
  {
    imgUrl: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const Flora = mongoose.model("floraRow", tableSchema);
//get
app.get("/floraRow", (req, res) => {
  Flora.find({}, (error, docs) => {
    if (!error) {
      res.send(docs);
    } else {
      res.status(500).json({ message: error });
    }
  });
});
//:idget
app.get("/floraRow/:id", (req, res) => {
  const { id } = req.params;
  Flora.findById(id, (error, doc) => {
    if (!error) {
      res.send(doc);
    } else {
      res.status(500).json({ message: error });
    }
  });
});
//delete
app.delete("/floraRow/:id", (req, res) => {
  const { id } = req.params;
  Flora.findByIdAndDelete(id, (error) => {
    if (!error) {
      res.send("success!");
    } else {
      res.status(404).json({ message: error });
    }
  });
});

//post
app.post("/floraRow/", (req, res) => {
  const posted = new Flora({
    imgUrl: req.body.imgUrl,
    name: req.body.name,
    price: req.body.price,
  });
  posted.save();
  res.send( "SUCCESS!" );
});

mongoose.set("strictQuery", false);
mongoose.connect(
  `mongodb+srv://sahar:sssaaa111@cluster0.opkcbok.mongodb.net/?retryWrites=true&w=majority`,
  (error) => {
    if (!error) {
      app.listen(port, () => {
        console.log(`http://localhost:${port}`);
      });
    }
  }
);
