// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let {Agenda} = require("../../node_modules/agenda");
const connectionOpts = {
  db: { address: "mongodb+srv://test:test123@cluster0.klpfd.mongodb.net/myFirstDatabase?retryWrites=true", collection: "agendaJobs" },
  useUnifiedTopology: true
};
const agenda = new Agenda(connectionOpts);

export default (req, res) => {
  agenda.on('ready', function() {
    agenda.start();
    agenda.now("photo autopost", { userId: "test", postImage: "https://montelcodes.com/images/avatar.jpg"});

    });
  res.status(200).json({ name: 'John Doe' })
}
