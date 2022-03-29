import React from "react";
import Button from "./Button";

const Buttons = () => {
    const icon = <span className="material-icons">add_shopping_cart</span>;
    return (
        <div className="buttons">
            <h1 className="buttons__title">Buttons</h1>
            <div className="buttons__list">
                <Button styles="default shadow" title="<Button />" />
                <Button
                    styles="default shadow default__hover"
                    title="&:hover, &:focus"
                />
            </div>

            <div className="buttons__list">
                <Button
                    styles="default outline"
                    title="<Button variant='outline' "
                />
                <Button
                    styles="default outline outline__hover"
                    title="&:hover, &:focus"
                />
            </div>

            <div className="buttons__list">
                <Button
                    styles="default text"
                    title="<Button variant=”text” /> "
                />
                <Button styles="default text__hover" title="&:hover, &:focus" />
            </div>

            <div className="buttons__list">
                <Button
                    styles="default disableshadow"
                    title="<Button disableShadow />"
                />
            </div>

            <div className="buttons__list">
                <Button styles="default disabled" title="<Button disabled />" name="Disabled" />
                <Button styles="default disabled__text" title="Button variant='text' disabled" name="Disabled" />
            </div>

            <div className="buttons__list">
                <Button styles="default icon" title="<Button startIcon='local_grocery_store' />" startIcon={icon} />
                <Button styles="default icon" title="<Button endIcon='local_grocery_store' />" endIcon={icon} />
            </div>

            <div className="buttons__list">
                <Button styles="default sm" title="<Button size='sm' />" />
                <Button styles="default sm md" title="<Button size='md' />" />
                <Button styles="default sm lg" title="<Button size='lg' />" />
            </div>

            <div className="buttons__list">
                <Button styles="default" title="<Button color='default' />" />
                <Button styles="default primary" title="<Button color='primary' />" />
                <Button styles="default secondary" title="<Button color='secondary' />" name="Secondary" />
                <Button styles="default danger" title="<Button color='danger' />" name="Danger" />
            </div>

            <div className="buttons__list">
                <Button styles="default gray" title="&:hover, &:focus" />
                <Button styles="default blue" />
                <Button styles="default second" name="Secondary" />
                <Button styles="default dang" name="Danger" />
            </div>
        </div>
    );
};

export default Buttons;
