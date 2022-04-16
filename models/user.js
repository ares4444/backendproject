const kittySchema = new mongoose.Schema({
    name: String
  });

const conn = mongoose.createConnection('mongodb+srv://ourteam:1234@cluster0.fg9bn.mongodb.net/Back-EndProject?retryWrites=true&w=majority');

const MyModel = conn.model('ModelName', kittySchema );
const m = new MyModel;
m.save(); // works


