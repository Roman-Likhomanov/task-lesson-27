// import Calendar from './Calendar.js';

// class CalendarController {
//  async create(req, res) {
//     try{
//         const {data, title, content} = req.body
//         const calendar = await Calendar.create({data, title, content})
//         res.json(calendar)
//        } catch(e) {
//            res.status(code,500).json(e)
//        }
//  }
//  async getAll(req, res) {
//     try{
//         const calendars = await Calendar.find();
//         return res.json(calendars);

//        } catch(e) {
//            res.status(code,500).json(e)
//        }
//  }

//  async getOne(req, res) {
//     try{
//         const {id} = req.params
//         if (!id) {
//             res.status(400).json({message: 'Id не указан'})
//         }
//         const calendar = await Calendar.findById(id);
//         return res.json(calendar)

//     } catch(e) {
//         res.status(code,500).json(e)
//     }

//  }

//  async update(req, res) {
//     try{
//     const calendar = req.body
//     if(!post._id) {
//         res.status(400).json({message: 'Id не указан'})
//     }
//     const updatedCalendar = await Calendar.findByIdAndUpdate(calendar._id, calendar, {new:true})
//     return res.json(updatedCalendar);
//     } catch(e) {
//         res.status(code,500).json(e)
//     }

//  }

//  async delete(req, res) {
//     try{
//     const {id} = req.params
//     if (!id) {
//         res.status(400).json({message: 'Id не указан'})
//     }
//     const calendar = await Calendar.findByIdAndDelete(id);
//     return res.json(calendar)
//     } catch(e) {
//         res.status(code,500).json(e)
//     }

//  }
// }

// export default new CalendarController();
