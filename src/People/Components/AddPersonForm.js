import React from 'react';
import Select from 'react-select';
import BigButton from '../../shared/BigButton';
import Input from '../../shared/Input';
import Form from '../../shared/Form';

class AddPersonForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            invalid: false,
            name: '',
            companyId: undefined
        };

        this.onCompanyChange = this.onCompanyChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }

    componentDidUpdate() {
        const { clearInput, inputCleared } = this.props;
        if (clearInput) {
            this.setState({
                invalid: false,
                name: '',
                companyId: undefined
            });

            inputCleared();
        }
    }

    onCompanyChange(selected) {
        this.setState({
            companyId: selected ? selected.value : undefined
        });
    }

    onFormSubmit() {
        const { name, companyId } = this.state;

        if (name === '') {
            this.setState({
                invalid: true
            });
        } else {
            this.props.addPersonAction({ name, companyId });
        }
    }

    onNameChange(event) {
        this.setState({
            invalid: false,
            name: event.target.value
        });
    }

    render() {
        const { companyId, invalid, name } = this.state;
        const { companies } = this.props;

        const placeholderText =
            companies.length <= 0
                ? 'No companies found...'
                : 'Select a company';

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
                <label htmlFor="company">Company</label>
                <Select
                    clearable={true}
                    name="company"
                    onChange={this.onCompanyChange}
                    options={companies}
                    placeholder={placeholderText}
                    value={companyId}
                />
                {invalid && (
                    <span style={{ color: 'red' }}>Name can not be empty</span>
                )}
                <BigButton onClick={this.onFormSubmit}>Create</BigButton>
            </Form>
        );
    }
}

export default AddPersonForm;
