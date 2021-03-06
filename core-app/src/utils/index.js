import { findIndex, isBoolean, isString } from 'lodash'
const crypto = require('crypto');
// guid生成器
export const createGuid = () => ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, c => (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16))

// 设置sessionStorage
export const shortCacheSave = (name, jsonObject) => {
    sessionStorage.setItem(name, JSON.stringify(jsonObject));
}
// 读取sessionStorage
export const shortCacheGet = name => JSON.parse(sessionStorage.getItem(name));

// 删除sessionStorage
export const shortCacheDelete = (name = null) => {
    name == null ? sessionStorage.clear() : sessionStorage.removeItem(name);
}

// 设置localStorage
export const cacheSave = (name, jsonObject) => {
    localStorage.setItem(name, JSON.stringify(jsonObject));
}

// 读取localStorage
export const cacheGet = name => JSON.parse(localStorage.getItem(name));

// 删除localStorage
export const cacheDelete = (name = null) => {
    name == null ? localStorage.clear() : localStorage.removeItem(name);
}

// 获取视图队列
export const getViewLayout = () => {
    const viewLayout = cacheGet('viewLayout') ?? [];
    cacheSave('viewLayout', viewLayout);
    return viewLayout;
}

// 获取指定视图队列
export const getOlineViewLayout = cid => {
    const viewLayout = cacheGet('viewLayout') ?? [];
    const indexOf = findIndex(viewLayout, item => item.cid === cid);
    return viewLayout[indexOf]
}

// 新增视图队列
export const addViewLayout = newBlood => {
    const viewLayout = cacheGet('viewLayout') ?? [];
    viewLayout.push(newBlood)
    cacheSave('viewLayout', viewLayout);
    return viewLayout;
}

// 更新视图队列
export const updateViewLayout = (cid, key, val) => {
    const viewLayout = cacheGet('viewLayout') ?? [];
    const indexOf = findIndex(viewLayout, item => item.cid === cid);
    viewLayout[indexOf].cSchema[key] = val;
    cacheSave('viewLayout', viewLayout);
    return viewLayout;
}

// 统一更新视图队列
export const updateAllViewLayout = (cid, newBool) => {
    const viewLayout = cacheGet('viewLayout') ?? [];
    const indexOf = findIndex(viewLayout, item => item.cid === cid);
    viewLayout[indexOf].cSchema = newBool
    cacheSave('viewLayout', viewLayout);
    return viewLayout;
}

// 移除视图队列
export const deleteViewLayout = cid => {
    const viewLayout = cacheGet('viewLayout') ?? [];
    const indexOf = findIndex(viewLayout, item => item.cid === cid);
    viewLayout.splice(indexOf, 1)
    cacheSave('viewLayout', viewLayout);
    return viewLayout;
}

const checkLang = {
    string: isString,
    boolean: isBoolean
}

// 验证参数
export const checkOptions = options => {
    console.log(options);
}

// 过滤参数
export const filterOptions = options => {
    const params = {}
    for (const key in options) {
        if (options.hasOwnProperty(key)) {
            const el = options[key];
            if (el !== "default" && el !== "") {
                params[key] = el;
            }
        }
    }
    return params;
}

// 提取参数
export const extractOptions = options => {
    const params = {}
    for (const key in options) {
        if (options.hasOwnProperty(key)) {
            const el = options[key];
            params[key] = el.default;
        }
    }
    return params;
}
