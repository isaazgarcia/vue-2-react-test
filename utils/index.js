import fetch from 'isomorphic-unfetch';
import {BaseUrl} from "../config";
import { mix } from 'polished';

export const fetcher = async (url)=> {const res = await fetch(BaseUrl + url); return await res.json()};
export const tint = (color,percentage) => mix(((100-percentage)/100),color,'#fff');
