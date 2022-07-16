const router = require("express").Router();
const Image = require("../models/Image");


// Get all ---> Successfull
router.get("/", async (req, res) => {
    try {
      const images = await Image.find();
      res.status(200).json(images);
    } catch (err) {
      res.status(500).json(err);
    }
  
});

// Search

router.get("/", async (req, res) => {
 try{ 
  const searchedField = req.query.name;
  Image.find({ name: { $regex: searchedField, $options: "$i" } })
  .then(data =>{
    res.send(data);
  });
} catch(err){
  res.status(500).json(err);
}
});

// Show by id --> Sucessfull

router.get("/show/:id", async (req, res) => {
 
    try {
      const image = await Image.findById(req.params.id);
      res.status(200).json(image);
    } catch (err) {
      res.status(500).json(err);
    }
  
});


// Create --> Sucessfull

router.post("/", async (req, res) => {
    const newImage = new Image(req.body);

    try {
      const savedImage = await newImage.save();
      res.status(201).json(savedImage);
    } catch (err) {
      res.status(500).json(err.message);
    }
  
});

//Get id  / edit successfull

router.get("/:id/edit", async (req, res) => {
 
    try {
      const image = await Image.findById(req.params.id);
      res.status(200).json(image);
    } catch (err) {
      res.status(500).json(err);
    }
  
});


//  Delete ---> sucessfull

router.delete("/delete/:id", async (req, res) => {
    try {
      await Image.findByIdAndDelete(req.params.id);
      res.status(200).json("The Image has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
    
});

// Update --> sucessfull

router.put("/:id/edit", async (req, res) => {
    try {
      const updatedImage = await Image.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedImage);
    } catch (err) {
      res.status(500).json(err);
    }

});

//search








module.exports = router;
