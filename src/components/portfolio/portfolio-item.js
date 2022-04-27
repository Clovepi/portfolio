import React from "react";
import { Link } from 'react-router-dom';

export default function(props) {
      // Data that we'll need
    // - background image: thumb_image_url
    // -logo
    // -description: description
    // id: id (to use with slug)

  const {id, description, thumb_image_url, logo } = props.item;
  return (
    <div>
      <img src={thumb_image_url} />
      <div>{description}</div>
      <div>{id}</div>
      <div>{thumb_image_url}</div>
      <div>{logo}</div>
      <Link to={`/portfolio/${props.slug}`}>Link</Link>
    </div>
  );
}
