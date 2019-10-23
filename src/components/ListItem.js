import React from 'react';
import '../stylesheets/pokeitem.scss';

const ListItem = ({ pokemon }) => {

    return (
        <li className="poke__list_item">
            <small className="poke__list_number">{pokemon.id}</small>
            <img src={pokemon.frontImage} alt={pokemon.name} className="poke__list_defaultimg" />
            <h5 className="poke__list_name">{pokemon.name}</h5>
            <ul className="poke__list_types_typeslist">
                {pokemon.types.map(type => {
                    return (
                        <li className={`poke__list_types_itemtypes ${type}`} key={type}>{type}</li>
                    )
                })}
            </ul>
        </li>
    )
}

export default ListItem;