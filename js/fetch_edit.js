import { get } from "https://bukulapak.github.io/api/process.js";
import { isiDataNilai } from "./controller/edit_nilai";
import { urlFetch } from "./config/url_get_nilai";

get(urlFetch, isiDataNilai)