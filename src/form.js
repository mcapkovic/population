import React from 'react';
import { Button, Form, Divider, Message } from 'semantic-ui-react';

export const LifeExpectancyCalc = (props) => (
    <div className='calcContainer'>
        <h1>Calculate life expectancy</h1>
        <Form error={props.formState.error ? true : false}>
            <Form.Field required>
                <label>Sex</label>
                <input
                    name='sex'
                    onChange={props.inputChange}
                    value={props.formState.sex}
                    placeholder='male/female'
                />
            </Form.Field>

            <Form.Field required>
                <label>Country</label>
                <input
                    name='country'
                    onChange={props.inputChange}
                    value={props.formState.country}
                    placeholder='Slovak Republic'
                />
            </Form.Field>

            <Form.Field required>
                <label>Date</label>
                <input
                    name='date'
                    onChange={props.inputChange}
                    value={props.formState.date}
                    placeholder='2001-05-11'
                />
            </Form.Field>

            <Form.Field required>
                <label>Age</label>
                <input
                    name='age'
                    onChange={props.inputChange}
                    value={props.formState.age}
                    placeholder='18y'
                />
            </Form.Field>

            <Message
                error
                header='Error'
                content={props.formState.error}
            />

            <Button
                type='submit'
                onClick={props.submitForm}
            >Submit</Button>
            or <a href='http://api.population.io/1.0/countries/'>list available countries</a>
        </Form>

        <h2 className='calcDivider'>your life expectancy is {props.lifeExpectancy} years</h2>

        <Divider horizontal >
            History
        </Divider>

        <ul>
            {props.history.map((log, index) => (
                <li key={index}>{log.sex}, {log.country}, {log.date}, {log.age}</li>
            ))}
        </ul>
    </div>
);


