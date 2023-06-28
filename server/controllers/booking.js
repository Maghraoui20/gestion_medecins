import Booking from '../models/booking.js';
import Medecin from '../models/medecin.js';
export const Reservermedecin = async (req, res) => {

  try {

    const {
      iduser,
      date,
      heure,
      phone,
      status,
      idmedecin,
    } = req.body

    const newReservation = new Booking({
      iduser,
      date,
      heure,
      phone,
      status,
      idmedecin,
    });

    await newReservation.save();

  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
}


export const getreservedmedecin = async (req, res) => {
  let ids = [];
  let idsatt = [];
  try {
    const id = req.query.iduser;
    const page = parseInt(req.query.page || "1");
    const PAGE_SIZE = 4;
    const medecinreserv = await Booking.find({ iduser: id, status: "Valider" }).select({ "idmedecin": 1, "_id": 0 });
    const medecinattente = await Booking.find({ iduser: id, status: "" }).select({ "idmedecin": 1, "_id": 0 });
    medecinreserv.map((el) => {
      ids.push(el.idmedecin);
    })
    medecinattente.map((e) => {
      idsatt.push(e.idmedecin);
    })
    const medecins = await Medecin.find({ _id: { $in: ids } }).limit(PAGE_SIZE).skip(PAGE_SIZE * (page - 1))
    const medecinsatt = await Medecin.find({ _id: { $in: idsatt } }).limit(PAGE_SIZE).skip(PAGE_SIZE * (page - 1))

    return res.status(200).json(
      {
        medecins, ids, idsatt,
        medecinsatt
      }
    );
  }
  catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err.message)

  }
}
export const Reservationcancled = async (req, res) => {
  try {
    const id = req.query.iduser;
    const id2 = req.query.idmedecin;
    const idbook = await Booking.findOne({ iduser: id, idmedecin: id2 });
    await Booking.findByIdAndUpdate(idbook._id, { status: "Annuler" });
    const medecin = await Medecin.findOneAndUpdate({ _id: id2 });
    res.json({ message: "la reservation du rendez vous a ete supprimer avec succés !" });
  } catch (error) {
    res.status(402).json({ message: error.message });
    console.log(error.message);
  }
}
export const CancelReservation = async (req, res) => {
  try {
    const id = req.query.iduser;
    const id2 = req.query.idmedecin;
    const idbook = await Booking.findOne({ iduser: id, idmedecin: id2 });
    await Booking.findByIdAndRemove(idbook._id);
    res.json({ message: "la reservation de rendez vous a ete supprimer avec succés !" });
  } catch (error) {
    res.status(402).json({ message: error.message });
    console.log(error.message);
  }
}

export const Getreservationbyid = async (req, res) => {
  let medecinsvalider = [];
  let medecinsannuler = [];
  let medecinsvide = [];
  try {
    const id = req.query.iduser;
    const medecins = await Booking.find({ iduser: id });
    medecins.map((el) => {
      if (el.status === "Valider") {
        medecinsvalider.push(el.idmedecin);
      }
      else if (el.status === "Annuler") {
        medecinsannuler.push(el.idmedecin);
      }
      else if (el.status === '') {
        medecinsvide.push(el.idmedecin);
      }

    })

    res.status(200).json(
      { medecinsvalider, medecinsannuler, medecinsvide }
    )
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
}


export const getBookingsmedecin = async (req, res) => {
  let ids = [];
  let idfreserved = [];
  let idvalider = [];
  try {
    const id = req.query.iduser;

    const medecinssresev = await Booking.find({ status: "", idmedecin: id });
    const medecinssvalider = await Booking.find({ status: "Valider", idmedecin: id });


    medecinssresev.map((el) => {
      idfreserved.push(el._id);
    });
    medecinssvalider.map((e) => {
      idvalider.push(e._id);
    });

    const bookings = await Booking.aggregate([
      {
        $lookup: {
          from: "clients",
          localField: "iduser",
          foreignField: "_id",
          as: "users",
        },
      },
      {
        $unwind: "$users",
      },
      {
        $lookup: {
          from: "medecins",
          localField: "idmedecin",
          foreignField: "_id",
          as: "medecins",
        },
      },
      {
        $unwind: "$medecins",
      },
      {
        $match: {
          _id: { $in: idfreserved }
        },
      },
      {
        $sort: {
          createdAt: -1
        }
      },
      {
        $project: {
          "users.firstname": 1,
          "users.lastname": 1,
          "users.cin": 1,
          "phone": 1,
          "iduser": 1,
          "users._id": 1,
          "_id": 1,


        }
      },

    ]);

    const bookingsvalider = await Booking.aggregate([
      {
        $lookup: {
          from: "clients",
          localField: "iduser",
          foreignField: "_id",
          as: "users",
        },
      },
      {
        $unwind: "$users",
      },
      {
        $lookup: {
          from: "medecins",
          localField: "idmedecin",
          foreignField: "_id",
          as: "medecins",
        },
      },
      {
        $unwind: "$medecins",
      },
      {
        $match: {
          _id: { $in: idvalider }
        },
      },
      {
        $sort: {
          createdAt: -1
        }
      },
      {
        $project: {
          "users.firstname": 1,
          "users.lastname": 1,
          "users.cin": 1,
          "iduser": 1,
          "users._id":1,
          "phone": 1,
          "_id": 1,



        }
      },

    ]);

   // console.log(bookings, "vali");
    const number = bookings.length
    const number2 = bookingsvalider.length
    res.status(200).json({ bookings, bookingsvalider, number, number2 });

  }
  catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err)

  }
}

export const Reservationvalidated = async (req, res) => {
  const ids = req.query.id;
  console.log(ids, "idsboo");

   try {
    const bookingsvalider = await Booking.find({ _id: { $in:ids} });
    console.log('bookingvalider', bookingsvalider)
    bookingsvalider.map(async (e) => {
      await Booking.findByIdAndUpdate({ _id: e._id }, { status: "Valider" })
      res.json({ message: "la réservation a ete valider  avec succés !" });

    });

  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error.message);
  }
}


export const Annulerreservation = async (req, res) => {
  const ids = req.query.selected;
  try {
    const bookingsvalider = await Booking.find({ _id: { $in: ids } });
    bookingsvalider.map(async (e) => {
      if (e.status === '') {
        await Booking.findByIdAndUpdate({ _id: e._id }, { status: "Annuler" })
      }
      else if (e.status === 'Valider') {

        await Booking.findByIdAndUpdate({ _id: e._id }, { status: "Annuler" })
      }

    });
    res.json({ message: "le rendez vous a ete mis a jour avec succés !" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}