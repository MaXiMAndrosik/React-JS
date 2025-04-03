import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Nav() {
    return (
        <div>
            <Switch {...label} defaultChecked />
            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button>Главная</Button>
                <Button>Каталог</Button>
                <Button>Контакты</Button>
            </ButtonGroup>
        </div>
    );
}
