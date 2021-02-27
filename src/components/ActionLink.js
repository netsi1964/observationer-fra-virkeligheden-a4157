import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';
import Icon from './Icon';

export default class ActionLink extends React.Component {
    render() {
        let action = _.get(this.props, 'action', null);
        let action_style = _.get(action, 'style', null) || 'link';
        let action_icon = _.get(action, 'icon_class', null) || 'dev';
        return (
            <Link to={withPrefix(_.get(action, 'url', null))}
              {...(_.get(action, 'new_window', null) ? ({target: '_blank'}) : null)}
              {...((_.get(action, 'new_window', null) || _.get(action, 'no_follow', null)) ? ({rel: (_.get(action, 'new_window', null) ? ('noopener ') : '') + (_.get(action, 'no_follow', null) ? ('nofollow') : '')}) : null)}
              className={classNames({'button': action_style !== 'link', 'button-secondary': action_style === 'secondary', 'button-icon': action_style === 'icon'})}>
              {(action_style === 'icon') ? (<React.Fragment>
                <Icon {...this.props} icon={action_icon} />
                <span className="screen-reader-text">{_.get(action, 'label', null)}</span>
              </React.Fragment>) : 
                _.get(action, 'label', null)
              }
            </Link>
        );
    }
}
