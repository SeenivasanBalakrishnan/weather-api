const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

const reports = router.db.get('weatherReports').value();
// Add custom routes before JSON Server router
server.get('/list/', (req, res) => {});

router.render = (req, res) => {
  res.jsonp({
    body: res.locals.data,
  });
};

server.get('/weather/cities/:keyword', (req, res) => {
  const keyword = req.params.keyword;
  let cities = [];
  if (keyword) {
    reports.filter((report) => {
      if (
        report.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
      ) {
        cities = [...cities, { id: report.id, name: report.name }];
      }
      return null;
    });
    if (cities?.length) {
      res.send(cities);
    } else {
      res.send({ error: `${keyword} is not found` });
    }
  } else {
    res.send({ error: `${keyword} is not found` });
  }
});

server.get('/weather/current/:cityId/:unit', (req, res) => {
  const { cityId, unit } = req.params;
  if (!cityId && !unit) {
    res.send({ error: 'Invalid parameters' });
    return false;
  }
  let report = reports.find((report) => report.id === parseInt(cityId));
  if (!report) res.send({ error: `${cityId} or ${unit} is not exists` });
  let { temp, temp_max, temp_min } = report;
  if (unit === 'F') {
    console.log(temp);
    temp = Math.round((temp * 9) / 5 + 32);
    temp_max = Math.round((temp_max * 9) / 5 + 32);
    temp_min = Math.round((temp_min * 9) / 5 + 32);
  }
  report = { ...report, temp, temp_max, temp_min };
  res.send(report);
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
