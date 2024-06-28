import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

const ListItem = styled.li`
  padding: 5px 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 0%;
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
