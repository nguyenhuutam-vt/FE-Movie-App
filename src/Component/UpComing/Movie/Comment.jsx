import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "styled-components";
import TextAvatar from "./TextAvatar";
import dayjs from "dayjs";
import "./Comment.css";
import StarIcon from "@mui/icons-material/Star";
import ReadMoreReact from "read-more-react/dist/components/ReadMoreReact";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";

const Comment = ({ comment }) => {
  console.log("commenttt", comment);
  const Container = styled.div`
    height: 100%;
    width: 60%;
  `;
  const [onRequest, setOnRequest] = useState(false);

  const [displayCount, setDisplayCount] = useState(3);

  const handleLoadMore = () => {
    setDisplayCount((prevDisplayCount) => prevDisplayCount + 3); // Tăng số lượng phần tử hiển thị lên 10
  };
  const displayedData = comment?.slice(0, displayCount);
  return (
    <Container>
      <h1 className="text-center mb-5" style={{ color: "wheat" }}>
        Review
      </h1>
      {displayedData?.map((item) => {
        return (
          <div>
            <Box
              sx={{
                padding: 2,
                borderRadius: "5px",
                position: "relative",
                background: "wheat",
                opacity: onRequest ? 0.6 : 1,
                marginBottom: "24px",
                "&:hover": { backgroundColor: "white" },
              }}
            >
              <Stack direction="row" spacing={2}>
                {/* avatar */}
                <TextAvatar text={item?.author_details?.username} />
                {/* avatar */}
                <Stack spacing={2} flexGrow={1}>
                  <Stack spacing={1}>
                    <Typography
                      variant="h6"
                      fontWeight="700"
                      style={{ display: "flex" }}
                    >
                      {item?.author_details?.username}
                      <div style={{ display: "flex", marginLeft: "30px" }}>
                        <div style={{ marginTop: "2px" }}>
                          {" "}
                          <StarIcon style={{ color: "red" }} />
                        </div>
                        {item?.author_details?.rating}
                      </div>
                    </Typography>

                    <Typography
                      variant="caption"
                      fontWeight="700"
                      style={{ color: "black" }}
                    >
                      {dayjs(item?.updated_at).format("DD-MM-YYYY HH:mm:ss")}
                    </Typography>
                  </Stack>

                  <Typography
                    variant="body1"
                    textAlign="justify"
                    sx={{
                      "&:hover": { cursor: "pointer" },
                    }}
                  >
                    <ReadMoreReact
                      text={item?.content}
                      min={80}
                      ideal={100}
                      max={200}
                      readMoreText="... Read more"
                    />
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </div>
        );
      })}
      <Button
        style={{ background: "transparent", color: "red" }}
        onClick={handleLoadMore}
      >
        Load More
      </Button>
      <Divider style={{ background: "black" }} />
      <Stack direction="row" spacing={2}>
        <TextAvatar text="Tam" />
        <Stack spacing={2} flexGrow={1}>
          <Typography variant="h6" fontWeight="700" style={{ color: "white" }}>
            Nguyen Tam
          </Typography>
          {/* <TextField
            style={{ background: "aliceblue" }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            multiline
            rows={4}
            placeholder="Write your review"
            variant="outlined"
          /> */}
          <TextField
            style={{ background: "aliceblue" }}
            multiline
            rows={4}
            placeholder="Write your review"
            variant="outlined"
          />
          <LoadingButton
            variant="contained"
            size="large"
            sx={{ width: "max-content" }}
            startIcon={<SendIcon />}
            loadingPosition="start"
            loading={onRequest}
            // onClick={onAddReview}
          >
            post
          </LoadingButton>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Comment;
