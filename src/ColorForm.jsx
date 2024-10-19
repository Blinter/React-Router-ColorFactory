import React from 'react';
import { useFormik } from 'formik';
import { HexColorPicker } from "react-colorful";
import * as Yup from 'yup';
import './ColorForm.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import GoBackButton from './GoBackButton';

function ColorForm({ handlerAdd, currentColors }) {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            color: '#000000',
            name: '',
        },
        validationSchema: Yup.object().shape({
            color: Yup.string()
                .test('valid-color', 'Please enter a valid hex color', (value) => {
                    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                    return hexRegex.test(value);
                }),
            name: Yup.string()
                .required('Name is required')
                .test('unique-name', 'Color name already exists',
                    v => !currentColors || !currentColors.some(color =>
                        color.name.toLowerCase() === v.toLowerCase())
                ),
        }),
        onSubmit: values => {
            handlerAdd(values);
            formik.resetForm();
            navigate('/colors');
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit} className="color-form">
                <div className="form-group">
                    <label htmlFor="color">Color Picker</label>
                    <HexColorPicker
                        color={formik.values.color}
                        onChange={(newColor) =>
                            formik.setFieldValue('color', newColor)}
                        className="color-picker"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Color Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        className="form-input"
                    />
                    {formik.errors.name && <div className="error">{formik.errors.name}</div>}
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
            <GoBackButton navigate={navigate} />
        </>
    );
}

ColorForm.propTypes = {
    handlerAdd: PropTypes.func.isRequired,
    currentColors: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired
        })
    ).isRequired
};


export default ColorForm;