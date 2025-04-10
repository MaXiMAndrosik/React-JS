import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "./productsSlice";
import {
    Box,
    TextField,
    Button,
    FormControlLabel,
    Checkbox,
    Grid,
} from "@mui/material";

const EditProductForm = ({ product, onCancel }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(product);

    useEffect(() => {
        setFormData(product);
    }, [product]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            updateProduct({
                ...formData,
                price: Number(formData.price),
            })
        );
        onCancel();
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Название"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Описание"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Цена"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        inputProps={{ min: 0 }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="available"
                                checked={formData.available}
                                onChange={handleChange}
                                color="primary"
                            />
                        }
                        label="Доступен"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mr: 2 }}
                    >
                        Сохранить
                    </Button>
                    <Button variant="outlined" onClick={onCancel}>
                        Отмена
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default EditProductForm;
