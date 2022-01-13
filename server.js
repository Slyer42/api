

app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/vue-test/dist'));

app.get('/', (req,res) => {
  res.sendFile(process.cwd() + '/vue-test/dist/index.html');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});