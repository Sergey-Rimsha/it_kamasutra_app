import React from 'react';
import UsersPagenation from '../common/Pagenation/UsersPagenation';
import User from './User/User';


let Users = (props) => {

    return (
        <div>
            <UsersPagenation onPageChanged={props.onPageChanged}
                currentPage={props.currentPage}
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize} />
            <div>
                {props.users.map((item) => {
                        return (
                            <User key={item.id} 
                                item={item}
                                follow={props.follow}
                                unfollow={props.unfollow}
                                followingInProgress={props.followingInProgress} />
                        )
                    })}
            </div>
        </div>
    );
    
}

export default Users;