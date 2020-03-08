import fetch from 'isomorphic-unfetch';
import {BaseUrl} from "../config";

export const fetcher = async (url)=> {const res = await fetch(BaseUrl + url); return await res.json()};
