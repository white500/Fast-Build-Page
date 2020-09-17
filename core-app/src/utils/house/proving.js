import _ from 'lodash'

const CheckLang = {
	null: _.isNull,
	string: _.isString,
	NaN: _.isNaN,
	number: _.isNumber,
	boolean: _.isBoolean
}

export const langInterFace = type => CheckLang[type]
