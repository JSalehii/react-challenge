import React from "react";
import Button from "./Button";

const Buttons = () => {
    const icon = <span className="material-icons">add_shopping_cart</span>;
    return (
        <div className="buttons">
            <h1 className="buttons__title">Buttons</h1>
            <div className="buttons__list">
                <Button style="default shadow" title="<Button />" />
                <Button
                    style="default shadow default__hover"
                    title="&:hover, &:focus"
                />
            </div>

            <div className="buttons__list">
                <Button
                    style="default outline"
                    title="<Button variant='outline' "
                />
                <Button
                    style="default outline outline__hover"
                    title="&:hover, &:focus"
                />
            </div>

            <div className="buttons__list">
                <Button
                    style="default text"
                    title="<Button variant=”text” /> "
                />
                <Button style="default text__hover" title="&:hover, &:focus" />
            </div>

            <div className="buttons__list">
                <Button
                    style="default disableshadow"
                    title="<Button disableShadow />"
                />
            </div>

            <div className="buttons__list">
                <Button style="default disabled" title="<Button disabled />" name="Disabled" />
                <Button style="default disabled__text" title="Button variant='text' disabled" name="Disabled" />
            </div>

            <div className="buttons__list">
                <Button style="default icon" title="<Button startIcon='local_grocery_store' />" startIcon={icon} />
                <Button style="default icon" title="<Button endIcon='local_grocery_store' />" endIcon={icon} />
            </div>

            <div className="buttons__list">
                <Button style="default sm" title="<Button size='sm' />" />
                <Button style="default sm md" title="<Button size='md' />" />
                <Button style="default sm lg" title="<Button size='lg' />" />
            </div>

            <div className="buttons__list">
                <Button style="default" title="<Button color='default' />" />
                <Button style="default primary" title="<Button color='primary' />" />
                <Button style="default secondary" title="<Button color='secondary' />" name="Secondary" />
                <Button style="default danger" title="<Button color='danger' />" name="Danger" />
            </div>

            <div className="buttons__list">
                <Button style="default gray" title="&:hover, &:focus" />
                <Button style="default blue" />
                <Button style="default second" name="Secondary" />
                <Button style="default dang" name="Danger" />
            </div>
        </div>
    );
};

export default Buttons;
