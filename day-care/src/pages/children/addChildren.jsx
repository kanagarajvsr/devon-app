import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from "react-router-dom";
import Typography from "../../components/Typography";
import { postChildren } from '../../api/children';
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Filter from '../../components/Filters';

// It use to add children
const AddChildren = () => {

    const navigate=useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();// It use to handle the form

    // This mutation hooks use for save the news.
    const { mutate } = useMutation(postChildren, {
        onSuccess: () => {
          toast.success(`Children added successfully!`, {
            position: "bottom-center",
            autoClose: 2000,
        });
        navigate("/children"); // on success save, redirecting to children page
        },
        onError: (err) => {
            toast.error(`Invalid Children detail ${err}!`, {
                position: "bottom-center",
                autoClose: 2000,
            });
        }
      });

    // After form validation the function use to call the save mutation 
    const onSubmit = async data => {
        data.id=Math.floor((Math.random() * 100) + 1); // to generate random id from 1 to 100
        data.avatar=null
          mutate(data);
    }
 
    return (
        <>
            <Typography variant="h6" label="Add Children" />
            <Filter link="/children" label="back" />
            
            <Card sx={{width:420}}> 
                <CardContent  >
                    <Stack direction="column"   spacing={2} component="form" onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="Child Name"
                            error={errors?.title?true:false}
                            variant="standard"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Child name is required"
                                }
                            })}
                        />
                        <ButtonGroup variant="standard">
                            <Button component={Link} to="/children" >Cancel</Button>
                            <Button type="submit">Submit</Button>
                        </ButtonGroup>
                    </Stack>
                </CardContent>
            </Card>
                 
            
        </>
    )
}

export default AddChildren;