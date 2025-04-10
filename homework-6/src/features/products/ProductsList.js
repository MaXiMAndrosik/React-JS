import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, toggleAvailability } from "./productsSlice";
import EditProductForm from "./EditProductForm";
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Grid,
    Chip,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
} from "@mui/material";
import {
    Edit as EditIcon,
    Delete as DeleteIcon,
    VisibilityOff as UnavailableIcon,
    Visibility as AvailableIcon,
} from "@mui/icons-material";

const ProductsList = () => {
    const products = useSelector((state) => state.products.items);
    const dispatch = useDispatch();
    const [editingProduct, setEditingProduct] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    const handleEdit = (product) => {
        setEditingProduct(product);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <Grid item xs={12}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Каталог продуктов ({products.length})
                </Typography>
            </Grid>
            <Grid container spacing={3} sx={{ mt: 2 }}>
                {products.length === 0 ? (
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            Нет продуктов в каталоге
                        </Typography>
                    </Grid>
                ) : (
                    products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    opacity: product.available ? 1 : 0.7,
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        gutterBottom
                                    >
                                        {product.name}
                                        <Chip
                                            label={
                                                product.available
                                                    ? "Доступен"
                                                    : "Недоступен"
                                            }
                                            color={
                                                product.available
                                                    ? "success"
                                                    : "error"
                                            }
                                            size="small"
                                            sx={{ ml: 1 }}
                                        />
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        paragraph
                                    >
                                        {product.description}
                                    </Typography>
                                    <Typography variant="h6" color="primary">
                                        {product.price.toLocaleString("ru-RU")}{" "}
                                        руб.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton
                                        aria-label="edit"
                                        onClick={() => handleEdit(product)}
                                        color="primary"
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        aria-label={
                                            product.available
                                                ? "make unavailable"
                                                : "make available"
                                        }
                                        onClick={() =>
                                            dispatch(
                                                toggleAvailability(product.id)
                                            )
                                        }
                                        color={
                                            product.available
                                                ? "default"
                                                : "success"
                                        }
                                    >
                                        {product.available ? (
                                            <UnavailableIcon />
                                        ) : (
                                            <AvailableIcon />
                                        )}
                                    </IconButton>
                                    <IconButton
                                        aria-label="delete"
                                        onClick={() =>
                                            dispatch(deleteProduct(product.id))
                                        }
                                        color="error"
                                        sx={{ ml: "auto" }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                )}

                <Dialog
                    open={openDialog}
                    onClose={handleCloseDialog}
                    fullWidth
                    maxWidth="sm"
                >
                    <DialogTitle>Редактирование продукта</DialogTitle>
                    <DialogContent>
                        {editingProduct && (
                            <EditProductForm
                                product={editingProduct}
                                onCancel={handleCloseDialog}
                            />
                        )}
                    </DialogContent>
                </Dialog>
            </Grid>
        </>
    );
};

export default ProductsList;
