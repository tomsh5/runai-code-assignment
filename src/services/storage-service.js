import { utilService } from "./util-service";

function query(entityType) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || [];
  return Promise.resolve(entities);
}

async function get(entityType, entityId) {
  try {
    const entities = await query(entityType);
    return entities.find((entity) => entity._id === entityId);
  } catch (err) {
    console.log(err);
  }
}

async function post(entityType, newEntity) {
  newEntity._id = utilService.createId();
  try {
    const entities = await query(entityType);
    entities.push(newEntity);
    _save(entityType, entities);
    return newEntity;
  } catch (err) {
    console.log(err);
  }
}

async function put(entityType, updatedEntity) {
  try {
    const entities = await query(entityType);
    const idx = entities.findIndex(
      (entity) => entity._id === updatedEntity._id
    );
    entities.splice(idx, 1, updatedEntity);
    _save(entityType, entities);
    return updatedEntity;
  } catch (err) {
    console.log(err);
  }
}

async function postMany(entityType, newEntities) {
  try {
    const entities = await query(entityType);
    newEntities = newEntities.map((entity) => ({
      ...entity,
      _id: utilService.createId(),
    }));
    entities.push(...newEntities);
    _save(entityType, entities);
    return entities;
  } catch (err) {
    console.log(err);
  }
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}

export const storageService = {
  query,
  get,
  put,
  postMany,
  post,
};
