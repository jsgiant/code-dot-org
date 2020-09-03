import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import color from '@cdo/apps/util/color';
import {borderRadius} from '@cdo/apps/lib/levelbuilder/constants';
import OrderControls from '@cdo/apps/lib/levelbuilder/OrderControls';
import ActivitySectionCard from '@cdo/apps/lib/levelbuilder/lesson-editor/ActivitySectionCard';
import FontAwesome from '@cdo/apps/templates/FontAwesome';
import {
  addActivitySection,
  moveActivity,
  removeActivity,
  updateActivityField
} from '@cdo/apps/lib/levelbuilder/lesson-editor/activitiesEditorRedux';

const styles = {
  groupHeader: {
    fontSize: 18,
    color: 'white',
    background: color.cyan,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  groupBody: {
    background: color.lightest_cyan,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    padding: 10,
    marginBottom: 20
  },
  addLesson: {
    fontSize: 14,
    color: '#5b6770',
    background: 'white',
    border: '1px solid #ccc',
    boxShadow: 'none',
    margin: '0 10px 10px 10px'
  },
  button: {
    marginLeft: 10
  },
  label: {
    fontSize: 20,
    marginRight: 5
  },
  input: {
    marginRight: 10
  },
  labelAndInput: {
    marginLeft: 5,
    display: 'flex',
    alignItems: 'center'
  }
};

class ActivityCard extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    activitiesCount: PropTypes.number,
    addActivitySection: PropTypes.func,
    removeActivity: PropTypes.func,
    moveActivity: PropTypes.func,
    updateActivityField: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
  }

  handleAddActivitySection = () => {
    this.props.addActivitySection(
      this.props.activity.position,
      `activitySection-${this.props.activity.activitySections.length + 1}`
    );
  };

  handleMoveActivity = direction => {
    if (
      (this.props.activity.position !== 1 && direction === 'up') ||
      (this.props.activity.position !== this.props.activitiesCount &&
        direction === 'down')
    ) {
      this.props.moveActivity(this.props.activity.position, direction);
    }
  };

  handleRemoveActivity = () => {
    this.props.removeActivity(this.props.activity.position);
  };

  handleChangeDisplayName = event => {
    this.props.updateActivityField(
      this.props.activity.position,
      'displayName',
      event.target.value
    );
  };

  handleChangeTime = event => {
    this.props.updateActivityField(
      this.props.activity.position,
      'time',
      event.target.value
    );
  };

  render() {
    const {activity} = this.props;

    return (
      <div>
        <div
          style={{
            ...styles.groupHeader,
            ...(this.state.collapsed && {marginBottom: 10})
          }}
        >
          <FontAwesome
            icon={this.state.collapsed ? 'expand' : 'compress'}
            onClick={() => {
              this.setState({
                collapsed: !this.state.collapsed
              });
            }}
          />
          <label style={styles.labelAndInput}>
            <span style={styles.label}>{`Activity:`}</span>
            <input
              value={activity.displayName}
              style={styles.input}
              onChange={this.handleChangeDisplayName}
            />
          </label>
          <label style={styles.labelAndInput}>
            <span style={styles.label}>{`Time (mins):`}</span>
            <input
              value={activity.time}
              style={{...styles.input, ...{width: 50}}}
              onChange={this.handleChangeTime}
            />
          </label>
          <OrderControls
            name={activity.key || '(none)'}
            move={this.handleMoveActivity}
            remove={this.handleRemoveActivity}
          />
        </div>
        <div style={styles.groupBody} hidden={this.state.collapsed}>
          {activity.activitySections.map(block => {
            return (
              <ActivitySectionCard
                key={block.key}
                activitySection={block}
                activityPosition={activity.position}
                activitySectionsCount={activity.activitySections.length}
              />
            );
          })}
          <button
            onMouseDown={this.handleAddActivitySection.bind()}
            className="btn"
            style={styles.addLesson}
            type="button"
          >
            <i style={{marginRight: 7}} className="fa fa-plus-circle" />
            Add Activity Section
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    addActivitySection(position, key) {
      dispatch(addActivitySection(position, key));
    },
    moveActivity(activityPosition, direction) {
      dispatch(moveActivity(activityPosition, direction));
    },
    removeActivity(activityPosition) {
      dispatch(removeActivity(activityPosition));
    },
    updateActivityField(activityPosition, fieldName, value) {
      dispatch(updateActivityField(activityPosition, fieldName, value));
    }
  })
)(ActivityCard);
