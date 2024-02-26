const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/user.controller');
const { validarCampos } = require('../middlewares/validar-campos');
const { emailExiste, existeUsuarioPorId } = require('../helpers/db-validator');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();


router.get('/', usuariosGet);

router.put('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], usuariosPut);

router.post('/', [
    check('nombre', 'el nombre de usuario obligatorio').not().isEmpty(),
    check('password', 'el password debe de ser minimo de 8 letras y máximo de 15').isLength({ min: 8, max:15 })
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/, 'i')
    .withMessage('La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un dígito, no espacios en blanco, un carácter especial y debe ser de 8 a 15 caracteres de longitud'),
    check('correo', 'el correo no es valido').isEmail(),
    check('correo').custom(emailExiste),
    validarCampos
], usuariosPost);

router.delete('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], usuariosDelete);



module.exports = router;   