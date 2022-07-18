Install repo:
`helm repo add kedacore https://kedacore.github.io/charts`

Update the local repos:
`helm repo update`

`Create namespace and deploy keda`
helm install keda kedacore/keda --namespace keda
 
