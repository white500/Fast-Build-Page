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

// 设置视图队列
