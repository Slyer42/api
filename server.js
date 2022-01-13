

app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/vue-test/dist'));

app.get('/', (req,res) => {
  res.sendFile(process.cwd() + '/vue-test/dist/index.html');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});