import { useMutation,useQuery } from '@tanstack/react-query';
import { Link, useNavigate } from "react-router-dom";
import Typography from "../../components/Typography";
import { postNews } from '../../api/news';
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Filter from './../../components/Filters';

//This use to add news items
const AddNews = () => {
    const navigate=useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm(); // It use to handle the form

    // This mutation hooks use for save the news.
    const { mutate } = useMutation(postNews, {
        onSuccess: () => {
          toast.success(`News added successfully!`, {
            position: "bottom-center",
            autoClose: 2000,
        });
        navigate("/news"); // on success save, redirect to news page
        },
        onError: (err) => {
            toast.error(`Invalid News detail ${err}!`, {
                position: "bottom-center",
                autoClose: 2000,
            });
        }
      });
 
    // After form validation the function use to call the save mutation 
    const onSubmit = async data => {
        data.id=Math.floor((Math.random() * 100) + 1); // to generate random id from 1 to 100
          mutate(data);
          
    }
 
    return (
        <>
            <Typography variant="h6" label="Add News" />
            <Filter link="/news" label="back" />
            <Card sx={{width:420}}> 
                <CardContent  >
                    <Stack direction="column"   spacing={2} component="form" onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="Title"
                            error={errors?.title?true:false}
                            variant="standard"
                            {...register("title", {
                                required: {
                                    value: true,
                                    message: "Title is required"
                                }
                            })}
                        />
                        <TextField
                            label="Author"
                            variant="standard"
                            error={errors?.author?true:false}
                            {...register("author", {
                                required: {
                                    value: true,
                                    message: "Author is required"
                                }
                            })}
                        />
                        <TextField
                            label="Content"
                            multiline
                            error={errors?.content?true:false}
                            variant="standard"
                            rows={2}
                            {...register("content", {
                                required: {
                                    value: true,
                                    message: "Content is required"
                                }
                            })}
                        />
                        <ButtonGroup variant="standard">
                            <Button component={Link} to="/news" >Cancel</Button>
                            <Button type="submit">Submit</Button>
                        </ButtonGroup>
                    </Stack>
                </CardContent>
            </Card>
        </>
    )
}

export default AddNews;