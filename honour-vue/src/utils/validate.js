// 合法uri
export function validateURL(textval) {
	const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
	return urlregex.test(textval)
}

/**
 * 小写字母
 */
export function validateLowerCase(str) {
	const reg = /^[a-z]+$/
	return reg.test(str)
}

/**
 * 大写字母
 */
export function validateUpperCase(str) {
	const reg = /^[A-Z]+$/
	return reg.test(str)
}

/**
 * 大小写字母
 */
export function validateAlphabets(str) {
	const reg = /^[A-Za-z]+$/
	return reg.test(str)
}

export function isNullOrBlank(str) {
	return str == null || str === '' || str === undefined;
}

/**
 * validate email
 */
// export function validateEmail(email) {
// 	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// 	return re.test(email)
// }

/**
 * validate 手机号
 */
export function validatePhoneNumber(phone) {
	const reg = /^[1][3,4,5,6,7,8][0-9]{9}$/;
	return reg.test(phone)
}