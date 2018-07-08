import React from 'react';
import BigButton from '../../shared/BigButton';
import Input from '../../shared/Input';
import Form from '../../shared/Form';

class NewCompanyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            invalid: false,
            name: ''
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }

    componentDidUpdate() {
        const { clearInput, inputCleared } = this.props;

        if (clearInput) {
            this.setState({
                name: ''
            });

            inputCleared();
        }
    }

    onFormSubmit() {
        const { name } = this.state;

        if (name === '') {
            this.setState({
                invalid: true
            });
        } else {
            this.props.addCompany(name);
        }
    }

    onNameChange(event) {
        this.setState({
            invalid: false,
            name: event.target.value
        });
    }

    render() {
        const { invalid, name } = this.state;

        return (
            <Form>
                <label htmlFor="name">Name</label>
                <Input
                    invalid={invalid}
                    name="name"
                    onChange={this.onNameChange}
                    type="text"
                    value={name}
                />
                {invalid && (
                    <span style={{ color: 'red' }}>
                        Company name can not be empty
                    </span>
                )}
                <BigButton onClick={this.onFormSubmit}>Create</BigButton>
            </Form>
        );
    }
}

export default NewCompanyForm;
