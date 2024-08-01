import Product from "../Model/Product.js";

export const productCreate = async (request, response) => {
  try {
    console.log(request.body)
    const data = await Product.create(request.body);
    await data.save();
    response.json({ data: data, model: 'product' });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
};

export const productFindAll = async (request, response) => {
  try {
    console.log("find");
    const products = await Product.find();
    response.send(products);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
};

export const productFindOne = async (request, response) => {
  try {
    console.log("find by id product");
    const product = await Product.findById(request.params.id);
    response.status(200).json({ product: product, model: "product" });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
};

export const productUpdate = async (request, response) => {
  try {
    const product = await Product.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );
    response.json({ data: product, model: "product" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error.message });
  }
};

export const productDelete = async (request, response) => {
  try {
    const product = await Product.deleteOne({ _id: request.params.id });
    response.json({ data: product, model: "product" });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
};