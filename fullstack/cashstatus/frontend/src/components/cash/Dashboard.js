import React, {Fragment} from 'react';
import Form from './Form';
import Cash from './Cash';

export default function Dashboard() {
    return (
        <Fragment>
            <Form/>
            <Cash/>
        </Fragment>
    );
}
