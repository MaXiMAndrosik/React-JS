import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./productsSlice";
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    FormControlLabel,
    Checkbox,
    Grid,
} from "@mui/material";

const AddProductForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        available: true,
    });

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
            addProduct({
                ...formData,
                price: Number(formData.price),
            })
        );
        setFormData({
            name: "",
            description: "",
            price: "",
            available: true,
        });
    };

    return (
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
                Добавить новый продукт
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
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
                            size="large"
                        >
                            Добавить продукт
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
};

export default AddProductForm;
