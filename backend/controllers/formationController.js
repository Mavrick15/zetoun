
const Formation = require('../models/Formation');

// @desc    Get all formations with pagination
// @route   GET /api/formations
// @access  Public
const getFormations = async (req, res) => {
  try {
    // Pagination parameters
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    
    // Optional filters
    const filters = {};
    if (req.query.level) filters.level = req.query.level;
    if (req.query.location) filters.location = { $regex: req.query.location, $options: 'i' };
    if (req.query.search) {
      filters.$or = [
        { title: { $regex: req.query.search, $options: 'i' } },
        { description: { $regex: req.query.search, $options: 'i' } }
      ];
    }

    // Get formations with pagination
    const formations = await Formation.find(filters)
      .sort({ date: 1 })
      .limit(limit)
      .skip(offset);

    // Get total count for pagination
    const total = await Formation.countDocuments(filters);

    res.json({
      formations,
      pagination: {
        total,
        limit,
        offset,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// @desc    Get formation by ID
// @route   GET /api/formations/:id
// @access  Public
const getFormationById = async (req, res) => {
  try {
    const formation = await Formation.findById(req.params.id);

    if (formation) {
      res.json(formation);
    } else {
      res.status(404).json({ message: 'Formation non trouvée' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// @desc    Create new formation (for seeding or admin purposes)
// @route   POST /api/formations
// @access  Private (would normally be protected)
const createFormation = async (req, res) => {
  try {
    const formation = await Formation.create(req.body);
    res.status(201).json(formation);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getFormations,
  getFormationById,
  createFormation
};
