import {HTMLAttributes} from "react";
import {createElement} from "react";
import sanitize from 'sanitize-html';

type SanitizeHTMLProps = {
    children: string;
    tag: string;
} & HTMLAttributes<HTMLElement>;
export const SanitizeHTML = ({tag, children, ...rest}) => {
    const sanitizedHTML = sanitize(children, {
        allowedTags: [ "b", "i", "em", "strong"]
    });
    return createElement(tag,
        {...rest},
        sanitizedHTML
    )
}