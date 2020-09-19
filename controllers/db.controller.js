require("dotenv").config({ path: "../.env" });
import { MongoClient } from "mongodb";

const { dbURI } = process.env;

const dbOptions = {
  useUnifiedTopology: true,
};

const insertUser = async (doc) => {
  const client = new MongoClient(dbURI, dbOptions);
  try {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("users");
    return await collection.insertOne(doc);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

const insertManyUsers = async (docs) => {
  const client = new MongoClient(dbURI, dbOptions);
  try {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("users");
    return await collection.insertMany(docs);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

const findOneUser = async (query) => {
  const client = new MongoClient(dbURI, dbOptions);
  try {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("users");
    return collection.findOne(query);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

const findAllUsers = async (query, options) => {
  const client = new MongoClient(dbURI, dbOptions);
  try {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("users");
    return collection.find(query, options);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

const updateOneUsers = async (filter, options, updateDoc) => {
  const client = new MongoClient(dbURI, dbOptions);
  try {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("users");
    return collection.updateOne(filter, options, updateDoc);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

const updateManyUsers = async (filter, updateDoc) => {
  const client = new MongoClient(dbURI, dbOptions);
  try {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("users");
    return await collection.updateOne(filter, updateDoc);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

const replaceOneUsers = async (query, replacement, options) => {
  const client = new MongoClient(dbURI, dbOptions);
  try {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("users");
    return collection.updateOne(query, replacement, options);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

const deleteOneUser = async (query) => {
  const client = new MongoClient(dbURI, dbOptions);
  try {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("users");
    return await collection.deleteOne(query);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

const deleteManyUser = async (query) => {
  const client = new MongoClient(dbURI, dbOptions);
  try {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("users");
    return await collection.deleteMany(query);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

module.exports = {
  insertUser,
  insertManyUsers,
  findOneUser,
  findAllUsers,
  updateOneUsers,
  updateManyUsers,
  replaceOneUsers,
  deleteOneUser,
  deleteManyUser,
};
