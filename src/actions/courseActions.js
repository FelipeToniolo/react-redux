import * as types from './actinoTypes';

export function createCourse(course) {
    return { type: types.CREATE_COURSE, course};
}