import PropTypes from 'prop-types';
import CourseListItem from 'components/CourseListItem';
import { List } from './CoursesList.styled';

function CoursesList({ courses }) {
  return (
    <List>
      {courses.map(item => {
        return <CourseListItem key={item.id} course={item} />;
      })}
    </List>
  );
}

CoursesList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CoursesList;
