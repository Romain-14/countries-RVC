import jsonfile from "jsonfile";
import path from "path";

const file = path.join(process.cwd(), "src/data/countries.json");
let datas = jsonfile.readFileSync(file);

const home_view = (req, res) => {
	res.render("template", { datas, template: "home" });
}

const country_view = (req, res) => {
    const datas = jsonfile.readFileSync(file);
    const id = parseInt(req.params.id);

    const country = datas.find(country => country.id === id);

    if(!country) return res.status(404).send("Country not found");

    res.render("template", { data: country, template: "country" });
}

const admin_view = (req, res) => {
    res.render("template", {template : "admin", datas});
}

const admin_add_country_view = (req, res) => {
    res.render("template", {template : "add", datas});
}

export { home_view, country_view, admin_view, admin_add_country_view }