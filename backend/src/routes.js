const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const validateSession = require("./validators/Session");
const validateOngCreate = require("./validators/OngCreate");
const validateProfile = require("./validators/Profile");
const validateIncident = require("./validators/IncidentCreate");
const validateIncidentIndex = require("./validators/IncidentIndex");
const validateId = require("./validators/IncidentId");

const routes = express.Router();

routes.post("/sessions", validateSession(), SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", validateOngCreate(), OngController.create);

routes.get("/profile", validateProfile(), ProfileController.index);

routes.get("/incidents", validateIncidentIndex(), IncidentController.index);

routes.post(
  "/incidents",
  validateIncident.body(),
  validateIncident.headers(),
  IncidentController.create
);

routes.delete("/incidents/:id", validateId(), IncidentController.delete);

module.exports = routes;
