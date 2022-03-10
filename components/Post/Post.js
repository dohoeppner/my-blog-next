import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

export function Post({ id, title, date }) {
  return (
    <Container>
      <Link href={"/Blog/" + id}>
        <a>
          <Title id={id}>{title}</Title>
        </a>
      </Link>
      <time dateTime={date}>{date}</time>
    </Container>
  );
}

const Container = styled.article`
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 8px;
`;

const Title = styled.h3`
  margin: 0;
`;
