export const getOne = model => async (req, res) => {
  try {
    const doc = await model
      .findOne({_id: req.params.id })
      .lean()
      .exec()

    if (!doc) {
      return res.status(400).end()
    }

    return res.status(200).json({ data: doc })
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}

export const getMany = model => async (req, res) => {
  try {
    const docs = await model
      .find({ owner: req.user._id })
      .lean()
      .exec()

    if (!docs) {
      return res.status(400).end()
    }

    return res.status(200).json({ data: docs })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const createOne = model => async (req, res) => {
  const owner = req.user._id
  try {
    const doc = await model.create({ ...req.body, owner })

    if (!doc) {
      return res.status(400).end()
    }

    return res.status(200).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

const updateOne = model => async (req, res) => {
  try {
    const updatedDoc = await model
      .findOneAndUpdate(
        { _id: req.params.id },
        { new: true }
      )
      .lean()
      .exec()

    if (!updatedDoc) {
      return res.status(400).end()
    }

    return res.status(200).json({ data: updatedDoc })
  } catch (e) {
    console.error(e)
    return res.status(400).end()
  }
}

export const removeOne = model => async (req, res) => {
  try {
    const removed = await model
      .findOneAndRemove({ _id: req.params._id })
      .exec()

    if (!removed) {
      return res.status(400).end()
    }

    return res.status(200).json({ data: removed })
  } catch (e) {
    console.error(e)
    return res.status(400).end()
  }
}

export const crudControllers = model => {
  return {
    createOne: createOne(model),
    getMany: getMany(model),
    getOne: getOne(model),
    removeOne: removeOne(model),
    updateOne: updateOne(model)
  }
}
